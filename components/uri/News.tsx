import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Modal,
    Pressable,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { posts } from '@/assets/posts';
import { styles_News } from '@/assets/style/News';


interface Post {
    id: string;
    user: string;
    userIcon: string;
    date: string;
    text: string;
    image: string;
    location: {
        latitude: number;
        longitude: number;
    };
}

const News: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
    const [sharedPosts, setSharedPosts] = useState<Record<string, boolean>>({});

    const handleImagePress = (image: string) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const handleLikePress = (postId: string) => {
        setLikedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const handleSharePress = (postId: string) => {
        setSharedPosts((prev) => ({
            ...prev,
            [postId]: true,
        }));
        alert('Shared successfully!');
    };

    return (
        
            <View style={styles_News.container}>
                {/* Header */}
                <View style={styles_News.header}>
                    <Text style={styles_News.headerText}>ข้อมูลข่าวสารของชุมชน</Text>
                </View>

                {/* New Post Box */}
                <View style={styles_News.postBox}>
                    {/* Input Section */}
                    <View style={styles_News.inputSection}>
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://preview.redd.it/sobbing-ibuki-by-v0-11ejad5kvvqa1.jpg?width=1080&crop=smart&auto=webp&s=9fbbdbde6ad41f9858d6d7ba6275801f29d1223f' }}
                            style={styles_News.profileImage}
                        />
                        {/* Text Input */}
                        <TextInput
                            style={styles_News.input}
                            placeholder="คุณคิดอะไรอยู่?"
                            placeholderTextColor="#A9A9A9"
                            multiline
                        />
                    </View>

                    {/* Buttons Section */}
                    <View style={styles_News.postActions}>
                        {/* Add Media Button */}
                        <TouchableOpacity style={styles_News.addMediaButton}>
                            <FontAwesome name="image" size={20} color="#007BFF" />
                            <Text style={styles_News.addMediaText}>Add Media</Text>
                        </TouchableOpacity>
                        {/* Post Button */}
                        <TouchableOpacity style={styles_News.postButton}>
                            <Text style={styles_News.postButtonText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* Posts List */}
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: { item: Post }) => (
                        <View style={styles_News.postContainer}>
                            <View style={styles_News.postHeader}>
                                <View style={styles_News.userInfo}>
                                    <Image source={{ uri: item.userIcon }} style={styles_News.userIcon} />
                                    <Text style={styles_News.userName}>{item.user}</Text>
                                </View>
                                <Text style={styles_News.postDate}>{item.date}</Text>
                            </View>
                            <View style={styles_News.separator} />
                            <Text style={styles_News.postText}>{item.text}</Text>
                            <TouchableOpacity onPress={() => handleImagePress(item.image)}>
                                <Image source={{ uri: item.image }} style={styles_News.postImage} />
                            </TouchableOpacity>

                            <MapView
                                style={styles_News.map}
                                initialRegion={{
                                    latitude: item.location.latitude,
                                    longitude: item.location.longitude,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: item.location.latitude,
                                        longitude: item.location.longitude,
                                    }}
                                />
                            </MapView>
                            <View style={styles_News.postFooter}>
                                {/* Like Button */}
                                <TouchableOpacity
                                    style={styles_News.footerAction}
                                    onPress={() => handleLikePress(item.id)}
                                >
                                    <MaterialIcons
                                        name="thumb-up"
                                        size={20}
                                        color={likedPosts[item.id] ? '#007BFF' : '#6C6C6C'}
                                    />
                                    <Text
                                        style={[
                                            styles_News.footerActionText,
                                            likedPosts[item.id] && { color: '#007BFF' },
                                        ]}
                                    >
                                        Like
                                    </Text>
                                </TouchableOpacity>

                                {/* Share Button */}
                                <TouchableOpacity
                                    style={styles_News.footerAction}
                                    onPress={() => handleSharePress(item.id)}
                                >
                                    <MaterialIcons name="share" size={20} color="#6C6C6C" />
                                    <Text style={styles_News.footerActionText}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />

                {/* Modal สำหรับแสดงภาพขยาย */}
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <Pressable style={styles_News.modalOverlay} onPress={() => setModalVisible(false)}>
                        <View style={styles_News.modalContent}>
                            <Image source={{ uri: selectedImage }} style={styles_News.modalImage} />
                        </View>
                    </Pressable>
                </Modal>
            </View>
      
    );
};

export default News;

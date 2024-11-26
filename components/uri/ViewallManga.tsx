import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { styles_productdetail } from '@/assets/style/ProductDetail';
import Banner from './Header';
import Menu from './Menu';
// สมมติว่า `products` คือลิสต์ข้อมูลของ Manga ที่นำมาใช้
const products = [
    {
        id: 1,
        name: 'Naruto',
        subtitle: 'Ninja Adventure',
        image: 'https://s1.zerochan.net/Nakamasa.Ichika.600.4025038.jpg',
    },
    {
        id: 2,
        name: 'One Piece',
        subtitle: 'Pirate King',
        image: 'https://s1.zerochan.net/Nakamasa.Ichika.600.4025038.jpg',
    },
    {
        id: 3,
        name: 'Attack on Titan',
        subtitle: 'Humanity\'s Fight for Survival',
        image: 'https://s1.zerochan.net/Nakamasa.Ichika.600.4025038.jpg',
    },
    {
        id: 4,
        name: 'Demon Slayer',
        subtitle: 'The Sword of Revenge',
        image: 'https://s1.zerochan.net/Nakamasa.Ichika.600.4025038.jpg',
    },
    {
        id: 5,
        name: 'Attack on Titan',
        subtitle: 'Humanity\'s Fight for Survival',
        image: 'https://s1.zerochan.net/Nakamasa.Ichika.600.4025038.jpg',
    },
    {
        id: 6,
        name: 'Demon Slayer',
        subtitle: 'The Sword of Revenge',
        image: 'https://s1.zerochan.net/Nakamasa.Ichika.600.4025038.jpg',
    },
];

type ShopScreenNavigationProp = any; // แทนที่ด้วยประเภทที่เหมาะสมในโปรเจกต์ของคุณ

const MangaAll: React.FC = () => {
    const navigation = useNavigation<ShopScreenNavigationProp>();

    // ฟังก์ชันในการแสดงรายการ Manga
    const renderMangaItem = ({ item }: { item: typeof products[0] }) => (
        <TouchableOpacity
            style={styles.mangaItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.mangaImage} />
            <Text style={styles.mangaTitle}>{item.name}</Text>
            <Text style={styles.mangaSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Banner />
            <FlatList
                data={products}
                renderItem={renderMangaItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // ใช้ numColumns เพื่อแสดงคอลัมน์หลายๆ คอลัมน์
                contentContainerStyle={styles.listContentContainer}
                ListEmptyComponent={<Text>ไม่พบข้อมูลสินค้า</Text>}
            />
        </View>
    );
};

const { width } = Dimensions.get('window'); // ขนาดหน้าจอ

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    listContentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // ทำให้คอลัมน์ที่ 2 ขึ้นบรรทัดใหม่
        justifyContent: 'space-between', // จัดคอลัมน์ให้ห่างกัน
    },
    mangaItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        width: width / 2 - 20, // ขนาดของแต่ละ item ให้เป็นครึ่งหนึ่งของหน้าจอ
        overflow: 'hidden',
        elevation: 5, // สำหรับ Android
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    mangaImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    mangaTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        color: '#333',
    },
    mangaSubtitle: {
        fontSize: 12,
        paddingHorizontal: 10,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#777',
    },
});

export default MangaAll;

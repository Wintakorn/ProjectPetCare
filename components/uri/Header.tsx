import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { banners } from '@/assets/banner';
import { styles_Header } from '@/assets/style/Header';
const Header = () => {
    return (
        <View style={styles_Header.container}>
            {/* Header */}
            <View style={styles_Header.header}>
                <Text style={styles_Header.title}>PetCare</Text>
                <Text style={{}}>Ubonratchatani</Text>
            </View>

            {/* Scrollable Banner */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles_Header.scrollContainer}
                nestedScrollEnabled
            >
                {banners.map((banner) => (
                    <View key={banner.id} style={styles_Header.banner}>
                        <View style={styles_Header.textContainer}>
                            <Text style={styles_Header.heading}>{banner.heading}</Text>
                            <Text style={styles_Header.subheading}>{banner.subheading}</Text>
                            <Text style={styles_Header.description}>{banner.description}</Text>
                            <TouchableOpacity style={styles_Header.button}>
                                <Text style={styles_Header.buttonText}>{banner.buttonText}</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={banner.image} style={styles_Header.image} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};



export default Header;

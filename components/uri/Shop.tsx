import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { products } from '@/assets/ProductData';
import { styles } from '@/assets/style/Shop';
const Shop: React.FC = () => {
    const navigation = useNavigation<ShopScreenNavigationProp>(); 

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>รายการสินค้า</Text>
            <View style={styles.grid}>
                {products.map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.productCard}
                        onPress={() => navigation.navigate('ProductDetail', { product })}
                    >
                        <Image source={{ uri: product.image }} style={styles.productImage} />
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price} B</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};
export default Shop;

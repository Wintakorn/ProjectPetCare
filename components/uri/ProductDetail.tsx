import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { styles } from '@/assets/style/Shop';
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    Alert.alert('Purchase Confirmed', `You have bought ${quantity} ${product.name}.`);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#00C6CF" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price} บาท</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>4.9</Text>
        </View>
        <Text style={styles.productCategory}>{product.category}</Text>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>Buy Now!</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ProductDetail;

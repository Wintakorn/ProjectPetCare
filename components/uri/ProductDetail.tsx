import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { styles_productdetail } from '@/assets/style/ProductDetail';


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
    <View style={styles_productdetail.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles_productdetail.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#00C6CF" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles_productdetail.image} />

      {/* Product Info */}
      <View style={styles_productdetail.infoContainer}>
        <Text style={styles_productdetail.productName}>{product.name}</Text>
        <Text style={styles_productdetail.productPrice}>{product.price} บาท</Text>
        <View style={styles_productdetail.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles_productdetail.ratingText}>4.9</Text>
        </View>
        <Text style={styles_productdetail.productCategory}>{product.category}</Text>

        {/* Quantity Selector */}
        <View style={styles_productdetail.quantityContainer}>
          <TouchableOpacity
            style={styles_productdetail.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles_productdetail.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles_productdetail.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles_productdetail.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles_productdetail.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles_productdetail.buyButton} onPress={handleBuyNow}>
        <Text style={styles_productdetail.buyButtonText}>Buy Now!</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ProductDetail;

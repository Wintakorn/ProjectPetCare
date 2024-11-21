import { StyleSheet } from "react-native"; 
export const styles_productdetail = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFF5F5',
      padding: 20,
    },
    backButton: {
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 400,
      borderRadius: 10,
      marginBottom: 20,
    },
    infoContainer: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
      marginBottom: 20,
    },
    productName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#00C6CF',
      marginBottom: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    ratingText: {
      marginLeft: 5,
      fontSize: 14,
      color: '#6C6C6C',
    },
    productCategory: {
      fontSize: 14,
      color: '#6C6C6C',
      marginBottom: 20,
    },
    quantityContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    quantityButton: {
      backgroundColor: '#EFF5F5',
      padding: 10,
      borderRadius: 5,
    },
    quantityButtonText: {
      fontSize: 18,
      color: '#00C6CF',
      fontWeight: 'bold',
    },
    quantity: {
      fontSize: 16,
      marginHorizontal: 20,
      fontWeight: 'bold',
    },
    buyButton: {
      backgroundColor: '#00C6CF',
      borderRadius: 10,
      paddingVertical: 15,
      alignItems: 'center',
    },
    buyButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
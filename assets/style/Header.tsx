import { StyleSheet } from "react-native";

export const styles_Header = StyleSheet.create({
    container: {
        backgroundColor: '#F8F9FA',
        paddingBottom: 15,
      
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#00C6CF',
    },
    scrollContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
        borderRadius: 15,
        padding: 15,
        marginRight: 15,
        width: 350,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 10
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#6C6C6C',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#00C6CF',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});



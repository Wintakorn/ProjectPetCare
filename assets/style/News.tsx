import { StyleSheet } from 'react-native';
export const styles_News = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#EFF5F5',
    },
    header: {
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    newPostHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    postContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: 'red',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postDate: {
        fontSize: 12,
        color: '#6C6C6C',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 10,
    },
    postText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333',
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,

    },
    map: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    footerAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerActionText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#6C6C6C',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
    },
    modalImage: {
        width: 350,
        height: 350,
        borderRadius: 10,
    },
    postBox: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F8F9FA',
        fontSize: 14,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addMediaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F4F8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    addMediaText: {
        marginLeft: 5,
        color: '#007BFF',
        fontSize: 14,
    },
    postButton: {
        backgroundColor: '#00C6CF',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    postButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    }
});


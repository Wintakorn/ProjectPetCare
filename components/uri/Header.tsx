import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, Animated } from 'react-native';
import { pets } from '@/assets/PetCarousel';
const { width } = Dimensions.get('window');

const banners = [
    {
        title: 'Welcome to Our App',
        subtitle: 'Experience the best services with us.',
        image: 'https://lwi.nexon.com/m_ba/brand/media/img_04.png',
    },
    {
        title: 'Discover Amazing Features',
        subtitle: 'Your journey starts here.',
        image: 'https://lwi.nexon.com/m_ba/brand/media/img_05.png',
    },
    {
        title: 'Join the Community',
        subtitle: 'Be part of something bigger.',
        image: 'https://lwi.nexon.com/m_ba/brand/media/img_01.png',
    },
];

const Banner: React.FC = () => {
    const flatListRef = useRef<FlatList<any>>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % banners.length;
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 5000); // Scroll every 3 seconds

        return () => clearInterval(interval);
    }, []);


    // Render each item
    const renderItem = ({ item }: { item: typeof banners[0] }) => (
        <View style={styles.bannerContainer}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25,

                }}>Myanimo</Text>
            </View>
            <FlatList
                ref={flatListRef}
                data={banners}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
            />

            {/* Indicator Dots */}
            <View style={styles.indicatorContainer}>
                {banners.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
    },
    bannerContainer: {
        width: width - 40,
        height: 200,
        marginHorizontal: 20,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#000',
    },
    inactiveDot: {
        backgroundColor: '#ccc',
    },
    Logo: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
    }
});

export default Banner;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/AppNavigator'; // นำเข้าจากไฟล์ที่กำหนดการตั้งค่า StackNavigator

interface MenuProps {
  onMenuSelect: (target: string) => void;
}

const menuItems = [
  { id: 1, title: 'Manga', icon: 'https://i.redd.it/she3nysl1t191.jpg', target: 'home' },
  { id: 2, title: 'Community', icon: 'https://cdn.donmai.us/sample/72/3e/__aru_blue_archive_drawn_by_koyubita__sample-723ef4db05c4d862d16125dd083573a7.jpg', target: 'news' },
  { id: 3, title: 'Shop', icon: 'https://static.miraheze.org/bluearchivewiki/thumb/9/99/Sora.png/266px-Sora.png', target: 'shop' },
  { id: 4, title: 'Anime', icon: 'https://embed.pixiv.net/artwork.php?illust_id=102605154&mdate=1667834358', target: 'service' },
];

const Menu: React.FC<MenuProps> = ({ onMenuSelect }) => {
  // ใช้ useNavigation กับ StackNavigationProp
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MangaAll')} style={styles.header}>
        <Text></Text>
        <Text style={styles.title}>All</Text>
      </TouchableOpacity>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled // ทำให้ ScrollView นี้ทำงานใน ScrollView ภายนอกได้
        contentContainerStyle={styles.menuScroll}
      >
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => onMenuSelect(item.target)}
          >
            <View style={styles.iconContainer}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    marginTop: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuScroll: {
    paddingHorizontal: 10,
  },
  menuItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    width: 100,
    height: 95,
  },
  menuText: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
});

export default Menu;

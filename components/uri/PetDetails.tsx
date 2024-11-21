import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import AppointmentCard from './AppointmentCard';
import { styles_PetDetail } from '@/assets/style/PetDetail';

interface Pet {
    id: number;
    name: string;
    image: ImageSourcePropType;
    gender: string;
    age: number;
    breed: string;
    history: string;
}

type RootStackParamList = {
    HomeScreen: undefined;
    PetDetail: { pet: Pet };
};

type PetDetailRouteProp = RouteProp<RootStackParamList, 'PetDetail'>;

const PetDetail: React.FC<{ route: PetDetailRouteProp }> = ({ route }) => {
    const { pet } = route.params;
    const navigation = useNavigation();

    return (
        <>
            {/* Header Section */}
            <View style={styles_PetDetail.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles_PetDetail.backButton}>
                        <Text style={styles_PetDetail.backButtonText}>{'<'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles_PetDetail.headerTitle}>
                        <Text style={styles_PetDetail.headerTitleMain}>Pet</Text>
                        <Text style={styles_PetDetail.headerTitleSub}>Care</Text>
                    </Text>
                    <Text style={styles_PetDetail.headerLocation}>📍 Ubonratchathani</Text>
                </View>
            </View>

            {/* Main Content */}
            <ScrollView style={styles_PetDetail.container}>
                <Image source={pet.image} style={styles_PetDetail.petImage} />
                <View style={styles_PetDetail.infoContainer}>
                    <Text style={styles_PetDetail.petName}>{pet.name}</Text>
                    <Text style={styles_PetDetail.location}>📍 Ubonratchathani</Text>

                    <View style={styles_PetDetail.detailsRow}>
                        <View style={styles_PetDetail.detailBox}>
                            <Text style={styles_PetDetail.detailLabel}>เพศ</Text>
                            <Text style={styles_PetDetail.detailValue}>{pet.gender}</Text>
                        </View>
                        <View style={styles_PetDetail.detailBox}>
                            <Text style={styles_PetDetail.detailLabel}>อายุ</Text>
                            <Text style={styles_PetDetail.detailValue}>{pet.age}</Text>
                        </View>
                        <View style={styles_PetDetail.detailBox}>
                            <Text style={styles_PetDetail.detailLabel}>สายพันธุ์</Text>
                            <Text style={styles_PetDetail.detailValue}>{pet.breed}</Text>
                        </View>
                    </View>

                    <Text style={styles_PetDetail.sectionTitle}>ประวัติ</Text>
                    <Text style={styles_PetDetail.sectionContent}>{pet.history}</Text>

                    <View style={styles_PetDetail.appointmentContainer}>
                        <AppointmentCard />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default PetDetail;

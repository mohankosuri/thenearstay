 
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const properties = [
  {
    id: 1,
    title: 'Prakruti',
    description: 'Located just 1.5 Kms from Chilkur Balaji Temple...',
    image: 'https://d24l7ypac8dw56.cloudfront.net/MenuImages/13-92554-113291.jpg',
    image1: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
    location: 'Chilkur',
    beds: 3,
    baths: 2,
    area: 1050,
    status: 'Lease'
  },
  {
    id: 2,
    title: 'Green Villa',
    description: 'Spacious villa with a beautiful garden...',
    image: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
    image1: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
    location: 'Gachibowli',
    beds: 4,
    baths: 3,
    area: 2000,
    status: 'Lease'
  },
  {
    id: 3,
    title: 'Urban Living',
    description: 'Modern apartment in the heart of the city...',
    image: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
    image1: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
    location: 'Hitech City',
    beds: 2,
    baths: 2,
    area: 1200,
    status: 'Rent'
  }
];

const propertyCard = () => {
  const navigation:any = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View className='flex justify-center items-center mb-4'>
      <Text className='text-green-700 text-2xl font-bold'>Properties</Text>
      </View>
      <View style={styles.gridContainer}>
        {properties.map(property => (
          <View style={styles.propertyCard} key={property.id}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PropertyDetail', { property })}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.propertyImage}
                  source={{ uri: property.image }}
                  resizeMode="cover"
                />
                <View style={styles.leaseTag}>
                  <Text style={styles.leaseText}>{property.status}</Text>
                </View>
              </View>
              <View style={styles.propertyDetails}>
                <Text style={styles.propertyTitle}>{property.title}</Text>
                <Text style={styles.propertyDescription}>{property.description}</Text>
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>📍 {property.location}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailText}>
                    <Text style={styles.boldText}>BEDS</Text>: <Text style={styles.highlightText}>{property.beds}</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.boldText}>BATHS</Text>: <Text style={styles.highlightText}>{property.baths}</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.boldText}>SQ FT</Text>: <Text style={styles.highlightText}>{property.area}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingVertical: 16,
      backgroundColor: '#f7fafc',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    propertyCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    imageContainer: {
      position: 'relative',
    },
    propertyImage: {
      width: '100%',
      height: 200,
    },
    leaseTag: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: '#f97316',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    leaseText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    propertyDetails: {
      padding: 16,
    },
    propertyTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: 8,
    },
    propertyDescription: {
      color: '#4a5568',
      marginBottom: 12,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    iconContainer: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 18,
    },
    locationText: {
      color: '#4a5568',
      marginLeft: 8,
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    detailText: {
      color: '#4a5568',
    },
    boldText: {
      fontWeight: '600',
    },
    highlightText: {
      fontWeight: 'bold',
      color: '#c05621',
    },
    viewButton: {
      backgroundColor: '#22543d',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default propertyCard;

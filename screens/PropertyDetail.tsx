
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PropertyDetail = ({ route }:any) => {
  const { property } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.propertyImage}
        source={{ uri: property.image }}
        resizeMode="cover"
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View className='flex flex-row space-x-2 mb-4'>
     <Image
        className='w-[100px] h-[100px]'
        source={{ uri: property.image1 }}
        
      />
      <Image
        className='w-[100px] h-[100px]'
        source={{ uri: property.image1 }}
        
      />
      <Image
        className='w-[100px] h-[100px]'
        source={{ uri: property.image1 }}
        
      />
      <Image
        className='w-[100px] h-[100px]'
        source={{ uri: property.image1 }}
        
      />
      <Image
        className='w-[100px] h-[100px]'
        source={{ uri: property.image1 }}
        
      />
     </View>
      </ScrollView>
      <View style={styles.detailsContainer}>
        <Text style={styles.propertyTitle}>{property.title}</Text>
        <Text style={styles.propertyDescription}>{property.description}</Text>
        <Text style={styles.detailText}>Location: {property.location}</Text>
        <Text style={styles.detailText}>Beds: {property.beds}</Text>
        <Text style={styles.detailText}>Baths: {property.baths}</Text>
        <Text style={styles.detailText}>Area: {property.area} sq ft</Text>
        <Text style={styles.detailText}>Status: {property.status}</Text>
        <View>
            <TouchableOpacity className='bg-orange-500 flex justify-center items-center py-2 rounded-md'>
                <Text className='font-bold text-white'>BookNow</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7fafc',
  },
  propertyImage: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  propertyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 8,
  },
  propertyDescription: {
    color: '#4a5568',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 8,
  },
});

export default PropertyDetail;

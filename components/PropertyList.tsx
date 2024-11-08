import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

// Define a type for the property data
interface Property {
  id: number;
  propertyName: string;
  propertyType: number;
  propertyLocation: string;
  propertyaddress: string;
  title:string
  // Add more fields if necessary
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your actual API URL
        const data: Property[] = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {properties.length > 0 ? (
        properties.map((property) => (
          <View key={property.id} style={styles.propertyCard}>
            <Text style={styles.propertyName}>{property.propertyName}</Text>
            <Text>Type: {property.propertyType}</Text>
            <Text>Location: {property.propertyLocation}</Text>
            <Text>Address: {property.propertyaddress}</Text>
            <Text>Address: {property.title}</Text>
          </View>
        ))
      ) : (
        <View style={styles.noPropertiesContainer}>
          <Text>No properties available</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  propertyCard: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noPropertiesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export default PropertyList;

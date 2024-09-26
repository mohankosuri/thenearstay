import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
 
 

const About = () => {
  const navigation:any = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
        style={styles.logo} 
      />
      <Text style={styles.appName}>The Near Stay</Text>
      
      
      <Text style={styles.sectionTitle}>Welcome</Text>
      <Text style={styles.description}>
        Welcome to The Near Stay – your perfect companion for finding the best 
        accommodations nearby. Whether you're planning a quick getaway or a 
        long vacation, we've got you covered with a wide range of stays to 
        suit your needs and budget.
      </Text>

      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.description}>
        Our mission is to make your travel experience smooth and memorable by 
        helping you discover the best stays with just a few taps.
      </Text>

      <Text style={styles.sectionTitle}>Key Features</Text>
      <Text style={styles.features}>
        • Explore Nearby Stays: Browse through a variety of accommodations near your current location.{"\n"}
        • Detailed Information: Get all the information you need about the stay, including amenities, photos, reviews, and more.{"\n"}
        • Easy Booking: Book your stay with a simple and secure process.{"\n"}
        • Personalized Recommendations: Receive suggestions based on your preferences and previous bookings.
      </Text>

      <Text style={styles.footer}>© 2024 The Near Stay. All rights reserved.</Text>
 
      
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#5A31F4',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
    paddingHorizontal: 15,
  },
  features: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    paddingHorizontal: 15,
    textAlign: 'left',
  },
  footer: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default About;

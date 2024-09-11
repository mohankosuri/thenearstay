import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&s' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Mohan K</Text>
        <Text style={styles.bio}>Software Developer | Tech Enthusiast | Traveler</Text>
         
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  contactContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default Profile;

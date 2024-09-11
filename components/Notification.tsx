import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NotificationComponent = ({ content, imageUrl }:any) => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.dot} />
      <Text style={styles.content}>{content}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 10,
  },
  content: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default NotificationComponent;

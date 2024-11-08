import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Coffeescreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="black"/>
      <ImageBackground
        source={require('../assets/coffee12.jpg')}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 10 }}
      >
        {/* Bottom Overlay with Opacity */}
        <View style={styles.bottomOverlay} />

        <View style={styles.overlay}>
          <Text style={styles.heading}>
            Fall in Love with{'\n'}Coffee in Blissful Delight!
          </Text>
          <Text style={styles.subheading}>
            Welcome to our cozy coffee corner, where every cup is a delightful experience for you.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center',
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
     // Optional: background overlay for better readability
    marginBottom: 40, // Adjust the spacing from the bottom
  },
  bottomOverlay: {
    // Optional additional styling for the bottom overlay if needed
  },
  heading: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily:'OpenSans-SemiBoldItalic',
  },
  subheading: {
    color: '#ccc',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c67c4e',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    width:300
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Coffeescreen;

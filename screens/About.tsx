import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View className='flex-1 items-center'>
      <View >
        <View>
        <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg' }}
        style={styles.blobImage}
      />
      <Image
        source={{ uri: 'https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png' }}
        style={styles.businessWomanImage}
      />
    </View>
        </View>
        <Text className='font-bold text-2xl mx-2'>Welcome to  <Text className='text-violet-600'>The NearStay</Text></Text>
        <View className='mt-4 mx-2'>
            <Text className='text-md'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    blobImage: {
      position: 'absolute',
      bottom: -100, // Adjust this value to move the image up or down as needed
      left: '50%',
      transform: [{ translateX: -100 }], // Adjust the value to center the image (negative half of the image width)
      width: '100%',
      height: 200, // Adjust as needed
      resizeMode: 'contain',
    },
    businessWomanImage: {
      width: 300, // Adjust this value based on your requirements
      height: 400, // Adjust this value based on your requirements
      resizeMode: 'contain',
      marginBottom: 50, // To provide space for the absolute positioned image
    },
  });

export default About
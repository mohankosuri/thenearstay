import { View, Text,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import PropertyCard from '../components/PropertyCard'

const Home = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#00bfa5" />
      <View className='mb-10'>
            <PropertyCard/>
      </View>
      
    </ScrollView>
  )
}

export default Home
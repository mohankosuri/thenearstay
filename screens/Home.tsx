import { View, Text,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import PropertyCard from '../components/PropertyCard'
import PropertyList from '../components/PropertyList'

const Home = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#00bfa5" />
      <View className='mb-10'>
             <PropertyList/>
      </View>
      
    </ScrollView>
  )
}

export default Home
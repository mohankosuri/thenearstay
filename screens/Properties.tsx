import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PropertyCard from '../components/PropertyCard'

const Properties = () => {
  return (
    <ScrollView>
      <View className='mb-10'>
            <PropertyCard/>
      </View>
      
    </ScrollView>
  )
}

export default Properties
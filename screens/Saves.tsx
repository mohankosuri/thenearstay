import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, {Polyline} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const Saves = () => {

  const navigation :any=useNavigation()
  return (
    <View className='flex-1 justify-center items-center'>
    <View className='flex justify-center items-center flex-col gap-4'>
      <View>
        <Text className='font-bold text-2xl'>Saved Homes</Text>
      </View>
      <View>
        <Text className='font-bold text-md'>Sign in to sea your saved homes</Text>
      </View>
      <View>
      <TouchableOpacity className='bg-cyan-700 px-6 py-4 rounded-md flex justify-center items-center w-[200px]' onPress={()=>navigation.navigate('Login')}>
            <Text className='text-white font-bold tracking-wider'>SIGN IN</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default Saves
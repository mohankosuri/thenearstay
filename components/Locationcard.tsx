import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const location={
  Amount:500000,
  beds:"4bd",
  bath:"3ba",
  area:"2613 sqft"
}

export const Detaildlocation=()=>{
    return(
      <View>
        <Text>MyDetildView</Text>
      </View>
    )
}

const Locationcard = () => {
  const navigation:any= useNavigation()
  
  return (
    <View className='flex-1'>
      <TouchableOpacity className='rounded-md p-2' onPress={()=>navigation.navigate('detailedlocation')}>
         <Image source={require('../assets/building.jpg')} className='w-[270px] h-[230px] rounded-md'/>
          
        <View className='my-2'><Text className='text-gray-800 font-bold text-lg'>${location.Amount}</Text></View>
        <View className='flex flex-row justify-between'>
          <View className='flex flex-row space-x-2 items-center'>
          <FontAwesome name="bed" size={20} color="gray" />
          <Text>{location.beds}</Text>
          </View>
          <View className='flex flex-row space-x-2 items-center'>
          <FontAwesome name="bathtub" size={20} color="gray" />
          <Text>{location.bath}</Text>
          </View>
          <View className='flex flex-row space-x-2 items-center'>
          <MaterialCommunityIcons name="set-square" size={20} color="gray" />
          <Text>{location.area}</Text>
          </View>
        </View>
        <View className='flex-col gap-1 mt-2'>
        <Text>5823 Windstone Dr</Text>
        <Text>Norman, Ok</Text>
        <Text className='text-xs'>AGENT LISTING</Text>
        <Text className='text-xs'>Listed Thu at 7:00 pm</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Locationcard
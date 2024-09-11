import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View className="p-3">
        <Text className="font-bold text-lg">Settings</Text>
      </View>

      <View className="bg-white p-4 flex flex-row">
        <View className="flex justify-center items-center bg-gray-300 p-3 rounded-md">
          <FontAwesome name="user-circle" size={60} color="black" />
        </View>
        <View className="flex justify-center items-center ml-8">
          <TouchableOpacity
            className="px-6 py-4 rounded-md bg-teal-400"
            onPress={() => navigation.navigate('Login')}>
            <Text className="text-black font-bold tracking-wider">SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-col p-2 gap-1">
        <TouchableOpacity
          className="bg-white p-6 flex flex-row justify-between items-center shadow-lg sha"
          onPress={() => navigation.navigate('mortgagerates')}>
          <View className="flex flex-row space-x-2 justify-center items-center">
            <MaterialCommunityIcons name="sack-percent" size={30} color="red" />
            <Text className="text-md text-black">Mortgage Rates</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white p-6 flex flex-row justify-between items-center shadow-lg"
          onPress={() => navigation.navigate('helpcenter')}>
         <View className="flex flex-row space-x-2 justify-center items-center">
         <Entypo name="help-with-circle" size={28} color="black" />
         <Text className="text-md text-black">Help Center</Text>
         </View>
          <FontAwesome name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white p-6 flex flex-row justify-between items-center shadow-lg"
          onPress={() => navigation.navigate('hiddenhomes')}>
         <View className="flex flex-row space-x-2 justify-center items-center">
         <MaterialCommunityIcons name="block-helper" size={25} color="red" />
         <Text className="text-md text-black">Hidden Homes</Text>
         </View>
          <FontAwesome name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white p-6 flex flex-row justify-between items-center shadow-lg"
          onPress={() => navigation.navigate('getprequalified')}>
         <View className="flex flex-row space-x-2 justify-center items-center">
         <FontAwesome name="check-circle" size={30} color="green" />
         <Text className="text-md text-black">Get PreQualified</Text>
         </View>
          <FontAwesome name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

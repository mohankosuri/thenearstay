import { View, Text, SafeAreaView, Animated,ImageBackground, StatusBar, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Splashscreen = () => {
  const navigator: any = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;  

  useEffect(() => {
    
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 1000 ,
        useNativeDriver: true,
      }),
      Animated.delay(2000),  
      Animated.timing(fadeAnim, {
        toValue: 0, 
        duration: 2000, 
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigator.navigate('home');
    });
  }, [fadeAnim]);

  return (
    <View className='flex-1 bg-splash1'>
      <StatusBar barStyle="light-content" backgroundColor="#12171b"></StatusBar>
      
        <View className='flex justify-center items-center mt-[200px] p-4'>
          <Animated.View style={[{ opacity: fadeAnim }]}>
             <Image source={require('../assets/thenearstay.jpg')} className='w-[350px] h-[350px]'/>
          </Animated.View>
        </View>
       
      
    </View>
  );
}

export default Splashscreen;

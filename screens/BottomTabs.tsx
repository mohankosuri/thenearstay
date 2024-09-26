import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { StatusBar } from 'react-native';
 
import Home from './Home';
import Properties from './Properties';
import Contact from './Contact';
import About from './About';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Properties') {
            iconName = focused ? 'building' : 'building';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'phone-alt' : 'phone-alt';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'house-user';
          } else if (route.name === 'About') {
            iconName = focused ? 'info-circle' : 'info-circle';
          }  

          const animatedStyle = useAnimatedStyle(() => {
            return {
              transform: [{ scale: withSpring(focused ? 1.5 : 1) }],
            };
          });

          return (
            <Animated.View style={animatedStyle}>
              <FontAwesome5 name={iconName} size={20} color={color} />
            </Animated.View>
          );
        },
        tabBarActiveTintColor: '#f97316',
        tabBarInactiveTintColor: '#6a51ae',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 10,
          paddingBottom: 5,
          paddingTop: 10,
          backgroundColor: 'white',
          position: 'absolute',
          margin: 10,
          borderRadius: 50,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: 5,
        },
      })}
    >
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Properties"
        component={Properties}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabs;

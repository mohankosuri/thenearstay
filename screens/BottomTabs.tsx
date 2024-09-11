import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import Search from './Search';
import Settings from './Settings';
import Feed from './Feed';
import Saves from './Saves';
import Alerts from './Alerts';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Search') {
            iconName = focused ? 'search-location' : 'search';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'house-user';
          } else if (route.name === 'Alerts') {
            iconName = focused ? 'bell' : 'bell';
          } else if (route.name === 'Saves') {
            iconName = focused ? 'heart' : 'heart';
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
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Saves"
        component={Saves}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

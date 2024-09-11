import { View, Text } from 'react-native'
import React from 'react'
import NotificationComponent from '../components/Notification'

const Alerts = () => {
  return (
    <View className='flex-1 p-4'>
     <NotificationComponent
        content="You have a new message!"
        imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      />
      <NotificationComponent
        content="You have a new message!"
        imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      />
      <NotificationComponent
        content="You have a new message!"
        imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      />
      <NotificationComponent
        content="You have a new message!"
        imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      />
      <NotificationComponent
        content="You have a new message!"
        imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      />
    </View>
  )
}

export default Alerts
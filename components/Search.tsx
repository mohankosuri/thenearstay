import { View, Text ,TextInput} from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View className='absolute z-10 '>
       <TextInput
        
        placeholder="Search..."
       className='bg-red-300 w-[100px]'
      />
    </View>
  )
}

export default Search
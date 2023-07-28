import React from 'react'
import { View, Text } from 'react-native'

const HeaderComponent = () => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: '#ffffff',
        }}
      >
        G
      </Text>
    </View>
  )
}
export default HeaderComponent

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IScreen } from '../types/navigation'

export default (props: IScreen) => {
  const { navigation } = props

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>
        Screen Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Text>go to home</Text>
      </TouchableOpacity>
    </View>
  )
}

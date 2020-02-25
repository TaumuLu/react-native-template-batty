import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default props => {
  console.log('TCL: props', props)
  const { navigation } = props
  console.log('TCL: props', navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.push('test')}>
        go to test
      </TouchableOpacity>
    </View>
  )
}

import React from 'react'
import { View, StyleSheet, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import screens from './screens'

const Stack = createStackNavigator()

export default () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <Stack.Navigator>
          {screens.map(({ name, ...props }) => {
            return <Stack.Screen key={name} name={name} {...props} />
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

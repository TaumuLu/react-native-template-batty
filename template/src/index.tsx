import React from 'react'
import { View, StyleSheet, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator, Screen } from './navigation'
import screens from './screens'

export default () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <Navigator>
          {screens.map(({ name, ...props }) => {
            return <Screen key={name} name={name} {...props} />
          })}
        </Navigator>
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

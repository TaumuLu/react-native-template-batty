import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
})

export default () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.content}>
        <Text style={styles.title}>react-native-template-batty</Text>
      </View>
    </ScrollView>
  )
}

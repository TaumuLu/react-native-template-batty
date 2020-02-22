/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

// web
if (Platform.OS === 'web') {
  const id = 'root'
  let rootDom = document.getElementById(id)
  if (!rootDom) {
    rootDom = document.createElement('div')
    rootDom.setAttribute('id', id)
    document.body.appendChild(rootDom)
  }
  AppRegistry.runApplication(appName, {
    rootTag: rootDom,
  })
}

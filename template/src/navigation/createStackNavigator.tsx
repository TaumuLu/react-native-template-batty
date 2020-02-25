import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

type property = 'component' | 'children'
type StackScreen = Parameters<typeof Stack.Screen>[0]
type IConfig = Omit<StackScreen, property>
type IComponent = any
// type StackNavigator = typeof Stack.Navigator

export const stackMap = new Map<string, JSX.Element>()

export const createStack = (config: IConfig) => (component: any) => {
  const { name } = config
  const screen = <Stack.Screen {...config} component={component} />
  if (stackMap.has(name)) {
    throw new Error(`Route: ${name} already exists`)
  } else {
    stackMap.set(name, screen)
  }
  return screen
}

export default (props: any) => {
  return (
    <Stack.Navigator {...props}>
      {[...stackMap].map(value => {
        const [key, element] = value
        return React.cloneElement(element, { key })
      })}
    </Stack.Navigator>
  )
}

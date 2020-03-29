import React from 'react'
import { Screen } from './stackNavigator'

type property = 'component' | 'children'
type StackScreen = Parameters<typeof Screen>[0]
type IConfig = Omit<StackScreen, property>

export const stackMap = new Map<string, JSX.Element>()

const createScreen = (config: IConfig) => (component: any) => {
  const { name } = config
  const screen = <Screen {...config} component={component} />
  if (stackMap.has(name)) {
    throw new Error(`Route: ${name} already exists`)
  } else {
    stackMap.set(name, screen)
  }
  return screen
}

export default createScreen

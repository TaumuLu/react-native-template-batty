import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()

const INITIAL_ROUTE_NAME = 'Home'

interface IConfig {
  screens: [
    {
      name: string
      component: any
    }
  ]
  initialRouteName: string
}

export default (config: IConfig) => ({ navigation, route }: any) => {
  const { screens, initialRouteName } = config
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={initialRouteName}>
      {screens.map(({ component, name }) => {
        return (
          <BottomTab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title: name,
            }}
          />
        )
      })}
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route: any) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  return routeName
}

import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screens from '../screens'

const BottomTab = createBottomTabNavigator()

const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }: any) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      {Screens.map(({ component, name }) => {
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
    // eslint-disable-next-line prettier/prettier
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  return routeName
}

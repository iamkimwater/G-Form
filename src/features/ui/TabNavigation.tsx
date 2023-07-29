import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import Home from './Home'
import Preview from './Preview'

const Tab = createMaterialBottomTabNavigator()

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name={'Preview'}
          component={Preview}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="preview" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation
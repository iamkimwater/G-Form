import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import store from '../store'

export type RootState = ReturnType<typeof store.getState>

export type RootTabParamList = {
  Home: undefined
  Preview: undefined
}

export type PreviewProps = MaterialBottomTabNavigationProp<
  RootTabParamList,
  'Preview'
>

export type NavigationProps = NavigationProp<
  ParamListBase,
  keyof RootTabParamList
>

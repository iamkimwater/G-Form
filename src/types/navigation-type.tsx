import store from '../store/store'
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

export type RootState = ReturnType<typeof store.getState>

export type RootTabParamList = {
  Home: undefined
  Preview: { formId: number }
}

export type PreviewProps = MaterialBottomTabNavigationProp<
  RootTabParamList,
  'Preview'
>

export type NavigationProps = NavigationProp<
  ParamListBase,
  keyof RootTabParamList
>

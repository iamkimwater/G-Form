import React from 'react'
import { View } from 'react-native'
import RequiredToggleComponent from './buttons/required-toggle-component'
import CopyButtonComponent from './buttons/copy-button-component'
import DeleteButtonComponent from './buttons/delete-button-component'
import AddButtonComponent from './buttons/add-button-component'
import { QuestionToolbarComponentProps } from '../../../types/props'

const QuestionToolbarComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        margin: 5,
      }}
    >
      <RequiredToggleComponent />
      <CopyButtonComponent />
      <DeleteButtonComponent />
      <AddButtonComponent />
    </View>
  )
}
export default QuestionToolbarComponent

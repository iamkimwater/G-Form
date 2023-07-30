import { Text, View } from 'react-native'
import { CheckboxComponentProps } from '../../../../types/props'
import React from 'react'

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  questionId,
}) => {
  return (
    <View>
      <Text>체크박스</Text>
    </View>
  )
}
export default CheckboxComponent

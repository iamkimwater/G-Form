import React from 'react'
import { View } from 'react-native'
import { QuestionTitleComponentProps } from '../../../types/props'

const QuestionTitleComponent: React.FC<QuestionTitleComponentProps> = ({
  questionId,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        margin: 5,
      }}
    />
  )
}
export default QuestionTitleComponent

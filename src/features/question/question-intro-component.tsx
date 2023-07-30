import { IQuestion } from '../../types/form-type'
import { Text, TouchableOpacity, View } from 'react-native'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import React from 'react'

const QuestionIntroComponent = (props: {
  question: IQuestion
  changeEditingState: () => void
}) => {
  const { question, changeEditingState } = props

  return (
    <TouchableOpacity
      onPress={changeEditingState}
      style={{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderRadius: 5,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
      }}
      activeOpacity={1}
    >
      <View style={{ marginTop: 20, marginStart: 20, marginEnd: 20 }}>
        <Text>{question.questionTitle}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
          marginStart: 20,
          marginEnd: 20,
          justifyContent: 'space-between',
        }}
      >
        <QuestionAnswerComponent questionType={question.questionType} />
      </View>
    </TouchableOpacity>
  )
}
export default QuestionIntroComponent

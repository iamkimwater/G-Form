import { IQuestion } from '../../types/form-type'
import { Text, TouchableOpacity, View } from 'react-native'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import React from 'react'
import { NonEditingQuestionComponentProps } from '../../types/props'

const NonEditingQuestionComponent: React.FC<
  NonEditingQuestionComponentProps
> = ({ question, changeEditingState }) => {
  return (
    <TouchableOpacity
      onPress={changeEditingState}
      style={{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderStyle: 'solid',
        borderTopWidth: 7,
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
        <QuestionAnswerComponent question={question} />
      </View>
    </TouchableOpacity>
  )
}
export default NonEditingQuestionComponent

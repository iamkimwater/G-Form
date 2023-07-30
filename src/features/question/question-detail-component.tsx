import { IQuestion } from '../../types/form-type'
import { TouchableOpacity, View } from 'react-native'
import QuestionTitleComponent from './question-title/question-title-component'
import ActionSheetComponent from './action-sheet/action-sheet-component'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import QuestionToolbarComponent from './question-toolbar/question-toolbar-component'
import React from 'react'

const QuestionDetailComponent = (props: {
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
      }}
      activeOpacity={1}
    >
      <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
        <QuestionTitleComponent
          questionId={question.questionId}
          questionTitle={question.questionTitle}
          pendingQuestionTitle={question.pendingQuestionTitle}
        />
      </View>
      <View>
        <View
          style={{
            marginTop: 10,
            marginStart: 20,
            marginEnd: 20,
            justifyContent: 'space-between',
          }}
        >
          <ActionSheetComponent
            questionId={question.questionId}
            questionType={question.questionType}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginStart: 20,
            marginEnd: 20,
            justifyContent: 'space-between',
          }}
        >
          <QuestionAnswerComponent question={question} />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginStart: 20,
          marginEnd: 20,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <QuestionToolbarComponent
          questionId={question.questionId}
          questionRequired={question.questionRequired}
        />
      </View>
    </TouchableOpacity>
  )
}

export default QuestionDetailComponent

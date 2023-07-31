import { IQuestion } from '../../types/form-type'
import { TouchableOpacity, View } from 'react-native'
import QuestionTitleComponent from './question-title/question-title-component'
import ActionSheetComponent from './action-sheet/action-sheet-component'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import QuestionToolbarComponent from './question-toolbar/question-toolbar-component'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'

const QuestionDetailComponent = (props: {
  question: IQuestion
  changeEditingState: () => void
}) => {
  const { question, changeEditingState } = props
  const { previewMode } = useSelector((root: RootState) => root.preview)

  return (
    <TouchableOpacity
      onPress={changeEditingState}
      style={{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'space-between',
      }}
      activeOpacity={1}
    >
      <View
        style={{
          height: 5,
          backgroundColor: '#000000',
        }}
      />
      <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
        <QuestionTitleComponent
          questionId={question.questionId}
          questionTitle={question.questionTitle}
          pendingQuestionTitle={question.pendingQuestionTitle}
        />
      </View>
      <View>
        {!previewMode ? (
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
        ) : null}
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
      {!previewMode ? (
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
      ) : null}
    </TouchableOpacity>
  )
}

export default QuestionDetailComponent

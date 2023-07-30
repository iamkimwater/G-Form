import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TouchableOpacity, View, Text } from 'react-native'
import { RootState } from '../../types/navigation-type'
import { QuestionComponentProps } from '../../types/props'
import { setEditingQuestionId } from '../../store/slices/question-slice'
import QuestionTitleComponent from './question-title/question-title-component'
import ActionSheetComponent from './action-sheet/action-sheet-component'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import QuestionToolbarComponent from './question-toolbar/question-toolbar-component'

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  questionId,
}) => {
  const question = useSelector(
    (state: RootState) => state.question.formQuestions.questions[questionId],
  )
  const editingQuestionId = useSelector(
    (state: RootState) => state.question.formQuestions.editingQuestionId,
  )

  const dispatch = useDispatch()

  const isEditing = editingQuestionId === questionId

  const changeEditingState = () => {
    dispatch(setEditingQuestionId(questionId))
  }

  const finishEditing = () => {
    dispatch(setEditingQuestionId(null))
  }

  return isEditing ? (
    <TouchableOpacity
      onPress={changeEditingState}
      style={{
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderRadius: 5,
        justifyContent: 'space-between',
      }}
      activeOpacity={1}
    >
      <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
        <QuestionTitleComponent
          questionId={questionId}
          finishEditing={finishEditing}
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
          <ActionSheetComponent questionId={questionId} question={question} />
        </View>
        <View
          style={{
            marginTop: 10,
            marginStart: 20,
            marginEnd: 20,
            justifyContent: 'space-between',
          }}
        >
          <QuestionAnswerComponent
            questionId={questionId}
            question={question}
          />
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
        <QuestionToolbarComponent questionId={questionId} question={question} />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={changeEditingState}
      style={{
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderRadius: 5,
        justifyContent: 'space-between',
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
        <QuestionAnswerComponent questionId={questionId} question={question} />
      </View>
    </TouchableOpacity>
  )
}

export default QuestionComponent

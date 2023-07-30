import React, { useCallback } from 'react'
import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { QuestionTitleComponentProps } from '../../../types/props'
import {
  setPendingQuestionTitle,
  setQuestionTitle,
} from '../../../store/slices/question-slice'

const QuestionTitleComponent: React.FC<QuestionTitleComponentProps> = ({
  questionId,
  questionTitle,
  pendingQuestionTitle,
}) => {
  const dispatch = useDispatch()

  const tryChangeQuestionTitle = useCallback(
    (text: string) => {
      if (text !== pendingQuestionTitle) {
        dispatch(
          setPendingQuestionTitle({ questionId, pendingQuestionTitle: text }),
        )
      }
    },
    [pendingQuestionTitle],
  )
  const changeQuestionTitle = useCallback(() => {
    if (pendingQuestionTitle !== questionTitle) {
      dispatch(setQuestionTitle({ questionId }))
    }
  }, [pendingQuestionTitle, questionTitle, questionId, dispatch])

  return (
    <TextInput
      value={pendingQuestionTitle}
      multiline={true}
      onChangeText={tryChangeQuestionTitle}
      onBlur={changeQuestionTitle}
      style={{
        fontSize: 18,
        padding: 15,
        color: '#000000',
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderColor: '#676767',
      }}
    />
  )
}

export default QuestionTitleComponent

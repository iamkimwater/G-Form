import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../types/navigation-type'
import { QuestionTitleComponentProps } from '../../../types/props'
import { setPendingQuestionTitle, setQuestionTitle } from '../question-slice'

const QuestionTitleComponent: React.FC<QuestionTitleComponentProps> = ({
  questionId,
}) => {
  const { questionTitle, pendingQuestionTitle } = useSelector(
    (state: RootState) => state.question.formQuestions.questions[questionId],
  )

  const dispatch = useDispatch()

  const tryChangeQuestionTitle = (text: string) => {
    if (text !== pendingQuestionTitle) {
      dispatch(
        setPendingQuestionTitle({ questionId, pendingQuestionTitle: text }),
      )
    }
  }

  const changeQuestionTitle = () => {
    if (pendingQuestionTitle !== questionTitle) {
      dispatch(setQuestionTitle({ questionId }))
    }
  }

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

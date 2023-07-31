import React, { useCallback } from 'react'
import { TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionTitleComponentProps } from '../../../types/props'
import { questionSlice } from '../../../store/slices/question-slice'
import { RootState } from '../../../types/navigation-type'

const QuestionTitleComponent: React.FC<QuestionTitleComponentProps> = ({
  questionId,
  questionTitle,
  pendingQuestionTitle,
}) => {
  const { previewMode } = useSelector((root: RootState) => root.preview)

  const dispatch = useDispatch()

  const tryChangeQuestionTitle = useCallback(
    (text: string) => {
      if (text !== pendingQuestionTitle) {
        dispatch(
          questionSlice.actions.setPendingQuestionTitle({
            questionId,
            pendingQuestionTitle: text,
          }),
        )
      }
    },
    [pendingQuestionTitle],
  )
  const changeQuestionTitle = useCallback(() => {
    if (pendingQuestionTitle !== questionTitle) {
      dispatch(questionSlice.actions.setQuestionTitle({ questionId }))
    }
  }, [pendingQuestionTitle, questionTitle, questionId, dispatch])

  return (
    <TextInput
      value={pendingQuestionTitle}
      multiline={true}
      onChangeText={tryChangeQuestionTitle}
      editable={!previewMode}
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

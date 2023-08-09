import React, { useCallback } from 'react'
import { TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionTitleComponentProps } from '../../../types/props'
import { questionSlice } from '../../../store/slices/question-slice'
import { RootState } from '../../../types/navigation-type'

const QuestionTitleComponent: React.FC<QuestionTitleComponentProps> = ({
  questionId,
  questionTitle,
}) => {
  const { previewMode } = useSelector((root: RootState) => root.preview)

  const dispatch = useDispatch()

  const changeQuestionTitle = useCallback(
    (text: string) => {
      if (text !== questionTitle) {
        dispatch(
          questionSlice.actions.setQuestionTitle({
            questionId,
            questionTitle: text,
          }),
        )
      }
    },
    [questionTitle],
  )

  return (
    <TextInput
      value={questionTitle}
      multiline={true}
      onChangeText={changeQuestionTitle}
      editable={!previewMode}
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

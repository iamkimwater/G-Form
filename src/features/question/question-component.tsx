import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import { QuestionComponentProps } from '../../types/props'
import { questionSlice } from '../../store/slices/question-slice'
import EditingQuestionComponent from './editing-question-component'
import NonEditingQuestionComponent from './non-editing-question-component'

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question }) => {
  const { editingQuestionId } = useSelector(
    (state: RootState) => state.question,
  )
  const isEditing = editingQuestionId === question.questionId

  const dispatch = useDispatch()

  const changeEditingState = () => {
    dispatch(
      questionSlice.actions.setEditingQuestionId({
        questionId: question.questionId,
      }),
    )
  }

  return isEditing ? (
    <EditingQuestionComponent
      question={question}
      changeEditingState={changeEditingState}
    />
  ) : (
    <NonEditingQuestionComponent
      question={question}
      changeEditingState={changeEditingState}
    />
  )
}

export default QuestionComponent

import React from 'react'
import { QuestionAnswerComponentProps } from '../../../types/props'
import { QUESTION_TYPE } from '../../../types/enums'
import LongAnswerComponent from './types/long-answer-component'
import ShortAnswerComponent from './types/short-answer-component'
import MultipleChoiceComponent from './types/multiple-choice-component'
import CheckboxComponent from './types/checkbox-component'
import { useSelector } from 'react-redux'
import { RootState } from '../../../types/navigation-type'

const QuestionAnswerComponent: React.FC<QuestionAnswerComponentProps> = ({
  questionId,
  questionType,
}) => {
  const { previewMode } = useSelector((state: RootState) => state.preview)

  if (questionType === QUESTION_TYPE.shortAnswer) {
    return <ShortAnswerComponent previewMode={previewMode} />
  }

  if (questionType === QUESTION_TYPE.longAnswer) {
    return <LongAnswerComponent previewMode={previewMode} />
  }

  if (questionType === QUESTION_TYPE.multipleChoice) {
    return (
      <MultipleChoiceComponent
        previewMode={previewMode}
        questionId={questionId}
      />
    )
  }

  if (questionType === QUESTION_TYPE.checkbox) {
    return (
      <CheckboxComponent previewMode={previewMode} questionId={questionId} />
    )
  }
  return null
}

export default QuestionAnswerComponent

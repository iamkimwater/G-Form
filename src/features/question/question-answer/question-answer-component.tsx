import React from 'react'
import { useSelector } from 'react-redux'
import { QuestionAnswerComponentProps } from '../../../types/props'
import { RootState } from '../../../types/navigation-type'
import { QUESTION_TYPE } from '../../../types/enums'
import LongAnswerComponent from './types/long-answer-component'
import ShortAnswerComponent from './types/short-answer-component'
import MultipleChoiceComponent from './types/multiple-choice-component'
import CheckboxComponent from './types/checkbox-component'

const QuestionAnswerComponent: React.FC<QuestionAnswerComponentProps> = ({
  questionId,
}) => {
  const { questionType } = useSelector(
    (state: RootState) => state.question.formQuestions.questions[questionId],
  )

  if (questionType === QUESTION_TYPE.shortAnswer) {
    return <ShortAnswerComponent />
  }

  if (questionType === QUESTION_TYPE.longAnswer) {
    return <LongAnswerComponent />
  }

  if (questionType === QUESTION_TYPE.multipleChoice) {
    return <MultipleChoiceComponent />
  }

  if (questionType === QUESTION_TYPE.checkbox) {
    return <CheckboxComponent />
  }
  return null
}

export default QuestionAnswerComponent

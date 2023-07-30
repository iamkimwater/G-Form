import React from 'react'
import { QuestionAnswerComponentProps } from '../../../types/props'
import { QUESTION_TYPE } from '../../../types/enums'
import LongAnswerComponent from './types/long-answer-component'
import ShortAnswerComponent from './types/short-answer-component'
import MultipleChoiceComponent from './types/multiple-choice/multiple-choice-component'
import CheckboxComponent from './types/checkbox-component'

const QuestionAnswerComponent: React.FC<QuestionAnswerComponentProps> = ({
  question,
}) => {
  if (question.questionType === QUESTION_TYPE.shortAnswer) {
    return <ShortAnswerComponent />
  }

  if (question.questionType === QUESTION_TYPE.longAnswer) {
    return <LongAnswerComponent />
  }

  if (question.questionType === QUESTION_TYPE.multipleChoice) {
    return <MultipleChoiceComponent question={question} />
  }

  if (question.questionType === QUESTION_TYPE.checkbox) {
    return <CheckboxComponent question={question} />
  }
  return null
}

export default QuestionAnswerComponent

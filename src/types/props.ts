import {
  ICheckboxQuestion,
  IMultipleChoiceQuestion,
  IQuestion,
} from './form-type'
import { QUESTION_TYPE } from './enums'

export interface QuestionComponentProps {
  question: IQuestion
}

export interface QuestionTitleComponentProps {
  questionId: number
  questionTitle: string
  pendingQuestionTitle: string
}

export interface ActionSheetComponentProps {
  questionId: number
  questionType: QUESTION_TYPE
}

export interface QuestionAnswerComponentProps {
  question: IQuestion
}

export interface QuestionToolbarComponentProps {
  questionId: number
  questionRequired: boolean
}

export interface RequiredToggleComponentProps {
  questionId: number
  questionRequired: boolean
}

export interface CopyButtonComponentProps {
  questionId: number
}

export interface DeleteButtonComponentProps {
  questionId: number
}

export interface MultipleChoiceComponentProps {
  question: IMultipleChoiceQuestion
}

export interface CheckboxComponentProps {
  question: ICheckboxQuestion
}

import { IQuestion } from './form-type'
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
  questionId: number
  questionType: QUESTION_TYPE
}

export interface QuestionToolbarComponentProps {
  questionId: number
  questionRequired: boolean
}

export interface RequiredToggleComponentProps {
  questionId: number
  questionRequired: boolean
}

export interface AddButtonComponentProps {
  questionId: number
}

export interface CopyButtonComponentProps {
  questionId: number
}

export interface DeleteButtonComponentProps {
  questionId: number
}

export interface ShortAnswerComponentProps {
  previewMode: boolean
}

export interface LongAnswerComponentProps {
  previewMode: boolean
}

export interface MultipleChoiceComponentProps {
  questionId: number
  previewMode: boolean
}

export interface CheckboxComponentProps {
  questionId: number
  previewMode: boolean
}

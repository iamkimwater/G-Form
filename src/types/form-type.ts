import { QUESTION_TYPE } from './enums'

export interface IDefaultQuestion {
  questionId: number
  questionTitle: string
  pendingQuestionTitle: string
  questionType: QUESTION_TYPE
  questionRequired: boolean
}

export interface IShortAnswerQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.shortAnswer
  answer: string
}

export interface ILongAnswerQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.longAnswer
  answer: string
}

export interface IChoice {
  content: string | undefined
  isSelected: boolean
}

export interface IEtcChoice extends IChoice {
  useState: boolean
}

export interface IMultipleChoiceQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.multipleChoice
  choices: IChoice[]
  etcChoice: IEtcChoice
}

export interface ICheckboxQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.checkbox
  choices: IChoice[]
  etcChoice: IEtcChoice
}

export type IQuestion =
  | IShortAnswerQuestion
  | ILongAnswerQuestion
  | IMultipleChoiceQuestion
  | ICheckboxQuestion

export interface IFormQuestionState {
  editingQuestionId: number | null
  questions: IQuestion[]
}

export interface IFormTitleState {
  title: string
  description: string
}

export interface IFormPreviewState {
  previewMode: boolean
}

export interface IFormState {
  formId: number
  formTitle: IFormTitleState
  formQuestion: IFormQuestionState
  previewMode: IFormPreviewState
}

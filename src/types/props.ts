import {
  IShortAnswerQuestion,
  ICheckboxQuestion,
  IMultipleChoiceQuestion,
  IQuestion,
  ILongAnswerQuestion,
} from './form-type'
import { QUESTION_TYPE } from './enums'

export interface QuestionComponentProps {
  question: IQuestion
}

export interface EditingQuestionComponentProps {
  question: IQuestion
  changeEditingState: () => void
}

export interface NonEditingQuestionComponentProps {
  question: IQuestion
  changeEditingState: () => void
}

export interface QuestionTitleComponentProps {
  questionId: number
  questionTitle: string
}

export interface ActionSheetComponentProps {
  questionId: number
  questionType: QUESTION_TYPE
}

export interface QuestionAnswerComponentProps<T extends IQuestion> {
  question: T
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

export interface ShortAnswerComponentProps {
  question: IShortAnswerQuestion
}

export interface LongAnswerComponentProps {
  question: ILongAnswerQuestion
}

export interface MultipleChoiceComponentProps {
  question: IMultipleChoiceQuestion
}

export interface CheckboxComponentProps {
  question: ICheckboxQuestion
}

export interface ChoicesComponentProps {
  question: IMultipleChoiceQuestion | ICheckboxQuestion
  editingQuestionId: number
  previewMode: boolean
}

export interface EtcChoiceComponentProps {
  question: IMultipleChoiceQuestion | ICheckboxQuestion
  editingQuestionId: number
  previewMode: boolean
}

import { IQuestion } from './form-type'

export interface QuestionComponentProps {
  questionId: number
}

export interface QuestionTitleComponentProps {
  questionId: number
  finishEditing: () => void
}

export interface ActionSheetComponentProps {
  questionId: number
  question: IQuestion
}

export interface QuestionAnswerComponentProps {
  questionId: number
  question: IQuestion
}

export interface QuestionToolbarComponentProps {
  questionId: number
  question: IQuestion
}

export interface RequiredToggleComponentProps {
  questionId: number
}

export interface CopyButtonComponentProps {
  questionId: number
}

export interface DeleteButtonComponentProps {
  questionId: number
}

export interface ShortAnswerComponentProps {}

export interface LongAnswerComponentProps {
  questionId: number
  question: IQuestion
}

export interface MultipleChoiceComponentProps {
  questionId: number
  question: IQuestion
}

export interface CheckboxComponentProps {
  questionId: number
  question: IQuestion
}

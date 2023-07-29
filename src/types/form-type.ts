import { QUESTION_TYPE } from './enums'

interface IDefaultQuestion {
  questionId: number
  questionTitle: string
  pendingQuestionTitle: string
  questionType: QUESTION_TYPE
  questionRequired: boolean
}

interface IShortAnswerQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.shortAnswer
  // 답변이 변경되지 않는 텍스트로 제공됨 (설문작성자가 답변을 입력할 필요가 없으므로)
}

interface ILongAnswerQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.longAnswer
  // 답변이 변경되지 않는 텍스트로 제공됨 (설문작성자가 답변을 입력할 필요가 없으므로)
}

interface IMultipleChoiceQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.multipleChoice
  choices: string[]
  // 기타 추가를 누르면 변경되지 않는 텍스트 답변이 추가됨 (설문작성자가 답변을 입력할 필요가 없으므로)
}

interface ICheckboxQuestion extends IDefaultQuestion {
  questionType: QUESTION_TYPE.checkbox
  choices: string[]
  // 기타 추가를 누르면 변경되지 않는 텍스트 답변이 추가됨 (설문작성자가 답변을 입력할 필요가 없으므로)
}

export type IQuestion =
  | IShortAnswerQuestion
  | ILongAnswerQuestion
  | IMultipleChoiceQuestion
  | ICheckboxQuestion

export interface IQuestions {
  editingQuestionId: number | null
  questionIds: number[]
  questions: { [questionId: number]: IQuestion }
}

export interface ITitle {
  title: string
  description: string
  pendingTitle: string
  pendingDescription: string
}

export interface IForm {
  formId: number
  formTitle: ITitle
  formQuestions: IQuestions
  previewMode: boolean
}

import { IForm } from '../types/form-type'
import { QUESTION_TYPE } from '../types/enums'

export const formInitialState: IForm = {
  formId: 1,
  formTitle: {
    title: '제목 없는 설문지',
    description: '',
    pendingTitle: '제목 없는 설문지',
    pendingDescription: '',
  },
  formQuestions: {
    editingQuestionId: 1,
    questionIds: [1],
    questions: {
      1: {
        questionId: 1,
        questionTitle: '제목 없는 질문',
        pendingQuestionTitle: '제목 없는 질문',
        questionType: QUESTION_TYPE.multipleChoice,
        questionRequired: false,
        choices: ['옵션1'],
      },
    },
  },
  previewMode: false,
}

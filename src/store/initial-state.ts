import { IForm } from '../types/form-type'
import { QUESTION_TYPE } from '../types/enums'

export const formInitialState: IForm = {
  formId: 0,
  formTitle: {
    title: '제목 없는 설문지',
    description: '',
  },
  formQuestions: {
    editingQuestionId: 0,
    questionIds: [0],
    questions: {
      0: {
        questionId: 0,
        questionTitle: '제목 없는 질문',
        questionType: QUESTION_TYPE.multipleChoice,
        questionRequired: false,
        choices: ['옵션1'],
      },
    },
  },
}

import { createSlice } from '@reduxjs/toolkit'
import { IFormQuestionState, IQuestion } from '../../types/form-type'
import { QUESTION_TYPE } from '../../types/enums'
import {
  CopyQuestionAction,
  DeleteQuestionAction,
  setEditingQuestionIdAction,
  setPendingQuestionTitleAction,
  SetQuestionRequiredAction,
  setQuestionTitleAction,
  SetQuestionTypeAction,
} from '../../types/actions'

const defaultQuestion: IQuestion = {
  questionId: 1,
  questionTitle: '제목 없는 질문',
  pendingQuestionTitle: '제목 없는 질문',
  questionType: QUESTION_TYPE.multipleChoice,
  questionRequired: false,
  choices: ['옵션1'],
}

const formQuestionInitialState: IFormQuestionState = {
  editingQuestionId: 1,
  questions: [{ ...defaultQuestion }],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState: formQuestionInitialState,
  reducers: {
    // 편집 상태 변경
    setEditingQuestionId: (state, action: setEditingQuestionIdAction) => {
      const { questionId } = action.payload
      state.editingQuestionId = questionId
    },

    // 질문 제목 변경
    setPendingQuestionTitle: (state, action: setPendingQuestionTitleAction) => {
      const { questionId, pendingQuestionTitle } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions[index].pendingQuestionTitle = pendingQuestionTitle
    },
    setQuestionTitle: (state, action: setQuestionTitleAction) => {
      const { questionId } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions[index].questionTitle =
        state.questions[index].pendingQuestionTitle
    },

    // 질문 타입 변경
    setQuestionType: (state, action: SetQuestionTypeAction) => {
      const { questionId, newType } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions[index].questionType = newType
    },

    // 질문 필수 여부 변경
    setQuestionRequired: (state, action: SetQuestionRequiredAction) => {
      const { questionId, required } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      if (state.questions[index]) {
        state.questions[index].questionRequired = required
      }
    },

    // 질문 복사
    copyQuestion: (state, action: CopyQuestionAction) => {
      const { questionId } = action.payload
      const originalQuestion = state.questions.find(
        (v) => v.questionId === questionId,
      )

      if (originalQuestion) {
        const maxId = Math.max(...state.questions.map((v) => v.questionId))
        const newQuestion = { ...originalQuestion, questionId: maxId + 1 }
        state.questions.push(newQuestion)
      }
    },

    // 질문 삭제
    deleteQuestion: (state, action: DeleteQuestionAction) => {
      if (state.questions.length === 1) {
        return
      }
      const { questionId } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions.splice(index, 1)
    },

    // 질문 생성
    addQuestion: (state) => {
      const maxId = Math.max(...state.questions.map((v) => v.questionId))
      state.questions.push({
        ...defaultQuestion,
        questionId: maxId + 1,
      })
    },
  },
})

export const {
  setEditingQuestionId,
  setPendingQuestionTitle,
  setQuestionTitle,
  setQuestionType,
  setQuestionRequired,
  copyQuestion,
  deleteQuestion,
  addQuestion,
} = questionSlice.actions
export default questionSlice.reducer

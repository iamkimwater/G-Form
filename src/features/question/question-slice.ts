import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'
import {
  CopyQuestionAction,
  DeleteQuestionAction,
  setEditingQuestionIdAction,
  setPendingQuestionTitleAction,
  SetQuestionRequiredAction,
  setQuestionTitleAction,
  SetQuestionTypeAction,
} from '../../types/actions'

export const questionSlice = createSlice({
  name: 'question',
  initialState: formInitialState,
  reducers: {
    // 편집 상태 변경
    setEditingQuestionId: (state, action: setEditingQuestionIdAction) => {
      state.formQuestions.editingQuestionId = action.payload
    },

    // 질문 제목 변경
    setPendingQuestionTitle: (state, action: setPendingQuestionTitleAction) => {
      const { questionId, pendingQuestionTitle } = action.payload
      state.formQuestions.questions[questionId].pendingQuestionTitle =
        pendingQuestionTitle
    },
    setQuestionTitle: (state, action: setQuestionTitleAction) => {
      const { questionId } = action.payload
      state.formQuestions.questions[questionId].questionTitle =
        state.formQuestions.questions[questionId].pendingQuestionTitle
    },

    // 질문 타입 변경
    setQuestionType: (state, action: SetQuestionTypeAction) => {
      const { questionId, newType } = action.payload
      state.formQuestions.questions[questionId].questionType = newType
    },

    // 질문 필수 여부 변경
    setQuestionRequired: (state, action: SetQuestionRequiredAction) => {
      const { questionId, required } = action.payload
      if (state.formQuestions.questions[questionId]) {
        state.formQuestions.questions[questionId].questionRequired = required
      }
    },

    // 질문 복사
    copyQuestion: (state, action: CopyQuestionAction) => {
      const { questionId } = action.payload
      const originalQuestion = state.formQuestions.questions[questionId]

      if (originalQuestion) {
        const maxId = Math.max(
          ...Object.keys(state.formQuestions.questions).map(Number),
        )
        const newQuestion = { ...originalQuestion, questionId: maxId + 1 }
        state.formQuestions.questions[newQuestion.questionId] = newQuestion
        state.formQuestions.questionIds.push(newQuestion.questionId)
      }
    },

    // 질문 삭제
    deleteQuestion: (state, action: DeleteQuestionAction) => {
      const { questionId } = action.payload
      delete state.formQuestions.questions[questionId]
      state.formQuestions.questionIds = state.formQuestions.questionIds.filter(
        (id) => id !== questionId,
      )
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
} = questionSlice.actions
export default questionSlice.reducer

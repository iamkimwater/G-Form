import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'
import {
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
  },
})

export const {
  setEditingQuestionId,
  setPendingQuestionTitle,
  setQuestionTitle,
  setQuestionType,
  setQuestionRequired,
} = questionSlice.actions
export default questionSlice.reducer

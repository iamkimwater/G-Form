import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'
import {
  setEditingQuestionIdAction,
  setPendingQuestionTitleAction,
  setQuestionTitleAction,
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
  },
})

export const {
  setEditingQuestionId,
  setPendingQuestionTitle,
  setQuestionTitle,
} = questionSlice.actions
export default questionSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'
import { setEditingQuestionIdAction } from '../../types/actions'

export const questionSlice = createSlice({
  name: 'question',
  initialState: formInitialState,
  reducers: {
    // 편집 상태 변경
    setEditingQuestionId: (state, action: setEditingQuestionIdAction) => {
      state.formQuestions.editingQuestionId = action.payload
    },
  },
})

export const { setEditingQuestionId } = questionSlice.actions
export default questionSlice.reducer

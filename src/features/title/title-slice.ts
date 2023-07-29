import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'
import {
  SetPendingDescriptionAction,
  SetPendingTitleAction,
} from '../../types/actions'

export const titleSlice = createSlice({
  name: 'title',
  initialState: formInitialState,
  reducers: {
    setPendingTitle: (state, action: SetPendingTitleAction) => {
      state.formTitle.pendingTitle = action.payload
    },

    setTitle: (state) => {
      state.formTitle.title = state.formTitle.pendingTitle
    },

    setPendingDescription: (state, action: SetPendingDescriptionAction) => {
      state.formTitle.pendingDescription = action.payload
    },

    setDescription: (state) => {
      state.formTitle.description = state.formTitle.pendingDescription
    },
  },
})

export const {
  setPendingTitle,
  setTitle,
  setPendingDescription,
  setDescription,
} = titleSlice.actions
export default titleSlice.reducer

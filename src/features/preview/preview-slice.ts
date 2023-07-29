import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'

export const previewSlice = createSlice({
  name: 'preview',
  initialState: formInitialState,
  reducers: {
    setPreviewMode: (state, action) => {
      state.previewMode = action.payload
    },
  },
})

export const { setPreviewMode } = previewSlice.actions
export default previewSlice.reducer

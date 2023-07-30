import { createSlice } from '@reduxjs/toolkit'
import { IFormPreviewState } from '../../types/form-type'

const previewInitialState: IFormPreviewState = {
  previewMode: false,
}

export const previewSlice = createSlice({
  name: 'preview',
  initialState: previewInitialState,
  reducers: {
    setPreviewMode: (state, action) => {
      state.previewMode = action.payload
    },
  },
})

export const { setPreviewMode } = previewSlice.actions
export default previewSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { formInitialState } from '../../store/initial-state'

export const questionSlice = createSlice({
  name: 'question',
  initialState: formInitialState,
  reducers: {},
})

export const {} = questionSlice.actions
export default questionSlice.reducer

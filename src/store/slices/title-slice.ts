import { createSlice } from '@reduxjs/toolkit'
import { IFormTitleState } from '../../types/form-type'
import { SetDescriptionAction, SetTitleAction } from '../../types/actions'

const titleInitialState: IFormTitleState = {
  title: '제목 없는 설문지',
  description: '',
}

export const titleSlice = createSlice({
  name: 'title',
  initialState: titleInitialState,
  reducers: {
    setTitle: (state, action: SetTitleAction) => {
      const { title } = action.payload
      state.title = title
    },

    setDescription: (state, action: SetDescriptionAction) => {
      const { description } = action.payload
      state.description = description
    },
  },
})

export default titleSlice.reducer

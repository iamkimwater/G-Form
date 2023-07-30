import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './slices/title-slice'
import questionReducer from './slices/question-slice'
import previewReducer from './slices/preview-slice'

const store = configureStore({
  reducer: {
    title: titleReducer,
    question: questionReducer,
    preview: previewReducer,
  },
})
export default store

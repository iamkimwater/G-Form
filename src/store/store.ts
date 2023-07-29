import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/title-slice'
import questionReducer from '../features/question/question-slice'
import previewReducer from '../features/preview/preview-slice'

const store = configureStore({
  reducer: {
    title: titleReducer,
    question: questionReducer,
    preview: previewReducer,
  },
})
export default store

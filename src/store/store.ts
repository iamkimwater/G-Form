import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/title-slice'
import questionReducer from '../features/question/question-slice'

const store = configureStore({
  reducer: {
    title: titleReducer,
    question: questionReducer,
  },
})
export default store

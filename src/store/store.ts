import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/title-slice'

const store = configureStore({
  reducer: {
    title: titleReducer,
  },
})
export default store

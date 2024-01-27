import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/estimateCountSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
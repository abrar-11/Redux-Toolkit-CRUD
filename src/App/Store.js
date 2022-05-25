import { configureStore } from '@reduxjs/toolkit'
import StudentReducer from '../Features/StudentSlice'


export const store = configureStore({
  reducer: {
    StudentReducer
  },

})
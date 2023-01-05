import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

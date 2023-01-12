import { configureStore } from '@reduxjs/toolkit'
import { favSlice } from './Slices/favSlice'

export const store = configureStore({
  reducer: {
    favourites: favSlice.reducer,
  },
})

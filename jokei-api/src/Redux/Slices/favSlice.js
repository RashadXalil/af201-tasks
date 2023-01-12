import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'favourites',
  initialState: {
    joke: '',
    jokes: [],
  },
  reducers: {
    changeJoke: (state, action) => {
      state.joke = action.payload
    },
    addtoFavorite: (state, action) => {
      state.jokes.push(action.payload)
    },
    deleteJoke: (state, action) => {
      //   state.jokes = state.jokes.filter((joke) => joke.id === action.payload)
      const target = state.jokes.find((joke) => joke.id === action.payload)
      const indexOfTarget = state.jokes.indexOf(target)
      state.jokes.splice(indexOfTarget, 1)
    },
  },
})
export const { changeJoke, addtoFavorite, deleteJoke } = favSlice.actions
export default favSlice.reducer

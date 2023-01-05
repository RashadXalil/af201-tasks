import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1
    },
    decrement: (state, action) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload)
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { reducers } = <counterSlice className="reducer"></counterSlice>

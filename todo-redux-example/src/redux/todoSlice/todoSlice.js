import { createSlice } from '@reduxjs/toolkit'
let id = 4
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        title: 'HTML',
        complated: false,
      },
      {
        id: 2,
        title: 'CSS',
        complated: true,
      },
      {
        id: 3,
        title: 'JS',
        complated: false,
      },
    ],
    activeFilter: 'all',
  },
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload
      const item = state.items.find((item) => item.id === id)
      item.complated = !item.complated
    },
    addTodo: (state, action) => {
      state.items.push({
        id: id,
        title: action.payload,
        complated: false,
      })
      id++
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload
      const target = state.items.find((item) => item.id === id)
      const indexOfTarget = state.items.indexOf(target)
      state.items.splice(indexOfTarget, 1)
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    clearCompleted: (state, action) => {
      state.items = state.items.filter((item) => item.complated === false)
    },
  },
})
export const {
  toggle,
  addTodo,
  deleteTodo,
  clearCompleted,
  changeActiveFilter,
} = todoSlice.actions
export default todoSlice.reducer

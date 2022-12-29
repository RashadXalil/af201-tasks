import { useReducer, useState } from 'react'
function reducer(state, action) {
  switch (action.type) {
    case 'set_todo':
      return { ...state, todo: action.payload }
    case 'add_todo':
      return {
        ...state,
        todo: '',
        todos: [...state.todos, action.payload],
      }
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: 'add_todo', payload: state.todo })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={state.todo}
          type="text"
          placeholder="new todo ..."
          onChange={(e) => {
            dispatch({ type: 'set_todo', payload: e.target.value })
          }}
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </div>
  )
}

export default App

import React, { useReducer } from 'react'
import reducer from './reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: state.todo })
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="todo..."
          value={state.todo}
          onChange={(e) => {
            dispatch({ type: 'SET_TODO', payload: e.target.value })
          }}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
      {state.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </div>
  )
}

export default App

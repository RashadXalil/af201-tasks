import React from 'react'
import UpdatedComponent from './HOC'

const Person2 = ({ money, increaseHandler }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>Vahid Money : ${money}</div>
      <button onClick={increaseHandler}>+</button>
    </div>
  )
}

export default UpdatedComponent(Person2)

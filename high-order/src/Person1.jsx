import React from 'react'
import UpdatedComponent from './HOC'

const Person1 = ({ money, increaseHandler }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>John Money : ${money}</div>
      <button onClick={increaseHandler}>+</button>
    </div>
  )
}

export default UpdatedComponent(Person1)

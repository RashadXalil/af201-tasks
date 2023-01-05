import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/counterSlice/counterSlice'
const Counter = () => {
  const inputRef = useRef()
  const value = useSelector((store) => store.counter.value)
  const dispatch = useDispatch()
  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        heigth: '100px',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        -
      </button>
      <div>{value}</div>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        +
      </button>
      <input type="number" ref={inputRef} />
      <button
        onClick={() => {
          dispatch(incrementByAmount(inputRef.current.value))
        }}
      >
        increment by input
      </button>
    </div>
  )
}

export default Counter

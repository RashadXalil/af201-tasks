import React, { useEffect, useReducer, useState } from 'react'
import reducer from '../Reducer'
import './StopWatch.scss'

const StopWatch = () => {
  const [state, dispatch] = useReducer(reducer, {
    time: 0,
    start: false,
  })
  useEffect(() => {
    let interval
    if (state.start) {
      interval = setInterval(() => {
        state.time += 10
        dispatch({ type: 'START' })
      }, 10)
    } else {
      console.log(state.time)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  })
  return (
    <div className="timer_body">
      <h1>StopWatch</h1>
      <div className="timer_bottom">
        <div className="timer_count">
          <span>
            {('0' + Math.floor((state.time / 60000) % 60)).slice(-2)}:
          </span>
          <span>{('0' + Math.floor((state.time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((state.time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="btns">
          <button onClick={() => dispatch({ type: 'START' })}>Start</button>
          <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
          <button
            onClick={() => {
              dispatch({ type: 'RESET' })
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopWatch

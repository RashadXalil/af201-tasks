import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteJoke } from '../../Redux/Slices/favSlice'

function Index() {
  const dispatch = useDispatch()
  const { jokes } = useSelector((state) => state.favourites)
  return (
    <ul>
      {jokes.map((joke, index) => {
        return (
          <li key={index}>
            {joke.value}{' '}
            <button
              onClick={() => {
                dispatch(deleteJoke(joke.id))
              }}
            >
              delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Index

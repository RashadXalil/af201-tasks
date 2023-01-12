import { nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtoFavorite, changeJoke } from '../../Redux/Slices/favSlice'
import './index.css'

const Index = () => {
  const { joke } = useSelector((state) => state.favourites)
  const { jokes } = useSelector((state) => state.favourites)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
      dispatch(changeJoke(res.data.value))
    })
  }, [])
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card__img">
          <img
            src="https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg"
            alt="Allahsukur"
          />
        </div>
        <div className="card__title"></div>
        <div className="card__content">{joke}</div>
        <div className="btns">
          <button
            onClick={() => {
              axios
                .get('https://api.chucknorris.io/jokes/random')
                .then((res) => {
                  dispatch(changeJoke(res.data.value))
                })
            }}
          >
            X
          </button>
          <button
            onClick={() => {
              dispatch(
                addtoFavorite({
                  id: nanoid(),
                  value: joke,
                }),
              )
              axios
                .get('https://api.chucknorris.io/jokes/random')
                .then((res) => {
                  dispatch(changeJoke(res.data.value))
                })
            }}
          >
            V
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index

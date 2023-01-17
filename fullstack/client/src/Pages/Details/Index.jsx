import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Index.module.css'

function Index() {
  let [card, setCards] = useState([])
  let { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setCards(res.data)
    })
  }, [])
  console.log(card)
  return (
    <>
      <div className={styles.cardCont}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img
              src="https://i.eldorado.ua//goods_images/1745352/312f6a7d6849bd6aa032de7e28e309e9.jpg"
              alt=""
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {'ID:'} {card.id}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {'Price:'} {card.price}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {'Desc: '} {card.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

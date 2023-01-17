import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './Index.module.css'

function Index() {
  const navigate = useNavigate()
  let id = useParams()
  let [products, setProducts] = useState([])
  let [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8080/products').then((res) => {
      if (search) {
        let filter = res.data.filter((x) => {
          return x.name.toLowerCase().includes(search.toLowerCase())
        })
        setProducts(filter)
      } else {
        setProducts(res.data.filter((prod) => prod.isDeleted === false))
      }
    })
  }, [search, products])
  return (
    <>
      {
        <div>
          <button
            onClick={() => {
              setProducts([...products].sort((a, b) => a.price - b.price))
              console.log('sorted')
            }}
          >
            Sort
          </button>
          <input
            type="text"
            placeholder="search.."
            className={styles.input}
            onChange={(e) => {
              let value = e.target.value
              setSearch(value)
            }}
          />
          <div className={styles.homeContainer}>
            {products.map((product) => {
              return (
                <>
                  <div key={product.id} className={styles.card}>
                    <div className={styles.img}>
                      <img
                        style={{ width: '190px', height: '100%' }}
                        src="https://i.eldorado.ua//goods_images/1745352/312f6a7d6849bd6aa032de7e28e309e9.jpg"
                        alt=""
                      />
                    </div>
                    <h4 className={styles.name}>
                      {'Name:'} {product.name}{' '}
                    </h4>
                    <p className={styles.id}>
                      {' '}
                      <b>{'Id:'}</b> {product.id}
                    </p>
                    <p className={styles.price}>
                      {' '}
                      <b>{'Price:'}</b> {product.price}
                    </p>
                    <p className={styles.desc}>
                      {' '}
                      <b>{'Desc:'}</b> {product.description}
                    </p>
                    <div className={styles.btn}>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          axios.delete(
                            `http://localhost:8080/products/${product.id}`,
                          )
                          console.log('deleted')
                        }}
                      >
                        Delete
                      </button>
                      <Link to={`/Details/${product.id}`}>
                        <button
                          style={{ width: '100px', backgroundColor: 'black' }}
                        >
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      }
    </>
  )
}

export default Index

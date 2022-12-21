import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item'

const List = () => {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(0)
  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/limit?=${limit}`)
      .then((res) => {
        setData(res.data)
      })
    return () => {
      console.log('salams=')
    }
  }, [limit])

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>categoryId</td>
          <td>supplierId</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Item key={item.id} product={item} />
        })}
      </tbody>
    </table>
  )
}

export default List

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import { Toaster } from 'react-hot-toast'

const List = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => setPhotos(res.data))
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => {
            return <Item key={photo.id} photo={photo} />
          })}
        </tbody>
      </table>
      <Toaster />
    </div>
  )
}

export default List

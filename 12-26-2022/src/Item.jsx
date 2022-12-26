import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillAndroid } from 'react-icons/ai'

const Item = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((res) => {
      setPosts(res.data)
    })
  }, [])

  return (
    <div>
      <span>
        <AiFillAndroid />
      </span>
      <FontAwesomeIcon icon="fa-solid fa-house" />
    </div>
  )
}

export default Item

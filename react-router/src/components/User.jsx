import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
  })
  return (
    <div>
      <ul>
        <li>name:{user.name}</li>
        <li>username:{user.username}</li>
        <li>email:{user.email}</li>
      </ul>
    </div>
  )
}

export default User

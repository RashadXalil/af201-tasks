import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
  }, [])
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}> {user.name} </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Users

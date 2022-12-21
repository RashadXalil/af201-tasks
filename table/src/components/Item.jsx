import React from 'react'

const Item = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>
        <button
          onClick={() => {
            deleteUser(user.id)
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Item

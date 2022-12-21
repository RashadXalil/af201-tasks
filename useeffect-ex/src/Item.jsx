import React from 'react'

const Item = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.categoryId}</td>
      <td>{product.supplierId}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  )
}

export default Item

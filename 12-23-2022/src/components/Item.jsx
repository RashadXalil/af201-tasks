import React, { useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import './Item.css'
const Item = ({ photo }) => {
  const itemRef = useRef()
  const deleteItem = () => {
    itemRef.current.classList.toggle('deleted')
    if (itemRef.current.classList.contains('deleted')) {
      toast.success('item deleted !!')
    } else {
      toast.success('item recovered !')
    }
  }
  return (
    <tr ref={itemRef}>
      <td>{photo.id}</td>
      <td>{photo.title}</td>
      <td>
        <button onClick={deleteItem}>Delete</button>
      </td>
    </tr>
  )
}

export default Item

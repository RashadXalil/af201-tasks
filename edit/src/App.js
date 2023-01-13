import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [datas, setData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const inputRef = useRef()
  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then((res) => {
      setData(res.data)
      setSelectedProduct(res.data[0].name)
    })
  }, [])
  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedProduct(e.target.value)
        }}
      >
        {datas.map((data, index) => {
          return (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          )
        })}
      </select>
      <form action="">
        <input type="text" placeholder={selectedProduct} ref={inputRef} />
        <button
          onClick={(e) => {
            e.preventDefault()
            const editedName = inputRef.current.value
            axios.patch(
              `https://northwind.vercel.app/api/products/${selectedProduct.id}`,
              {
                name: editedName,
              },
            )
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default App

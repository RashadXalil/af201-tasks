import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import './App.css'
function App() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        setPhotos(res.data)
        setLoading(false)
        toast.success('data geldi !')
      })
      .catch(() => {
        setLoading(false)
        toast.error('data gelmedi !')
      })
  }, [])
  return (
    <div className="App">
      {loading ? (
        <div className="div">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <ul>
          {photos.map((photo) => {
            return <li key={photo.id}>{photo.title}</li>
          })}
        </ul>
      )}
      <Toaster />
    </div>
  )
}

export default App

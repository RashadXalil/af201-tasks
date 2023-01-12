import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './Components/Card/Index'
import Home from './Pages/Home/index'
import Navbar from './Components/Navbar/index'
import Favourites from './Pages/Favourites/index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

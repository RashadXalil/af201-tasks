import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Shop from './components/Shop'
import User from './components/User'
import Users from './components/Users'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

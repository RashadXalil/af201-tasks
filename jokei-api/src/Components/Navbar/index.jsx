import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'

function Index() {
  const { jokes } = useSelector((state) => state.favourites)
  return (
    <>
      <header>
        <nav>
          <div className="left">LOGO</div>
          <div className="mid">By Abbasov</div>
          <div className="right">
            <ul>
              <Link className="link" to={'/'}>
                Home
              </Link>
              <Link className="link" to={'/favourites'}>
                Favourites {jokes.length}
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Index

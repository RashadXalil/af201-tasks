import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data))
  }, [])
  return (
    <div>
      <select
        name="filter"
        onChange={(e) => {
          axios
            .get(`https://restcountries.com/v3.1/region/${e.target.value}`)
            .then((res) => setCountries([...res.data]))
        }}
      >
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <ul>
        {countries.map((country) => {
          return <Item key={country.name?.common} country={country} />
        })}
      </ul>
    </div>
  )
}

export default App

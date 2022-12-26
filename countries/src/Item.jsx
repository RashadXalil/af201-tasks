import React from 'react'

const Item = ({ country }) => {
  return (
    <li>
      <span>{country.name.common}</span>
      <br />
      {country.currencies ? (
        <span>{Object.entries(country.currencies)[0][1].name}</span>
      ) : (
        ''
      )}
    </li>
  )
}
export default Item

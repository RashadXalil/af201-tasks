import React from 'react'
import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Item from './Item'

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
]

export default function List() {
  const [data, setData] = useState(rows)
  function deleteUser(id) {
    let target = rows.find((x) => x.id === id)
    let indexOfTarget = rows.indexOf(target)
    rows.splice(indexOfTarget, 1)
    setData([...rows])
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Item row={row} deleteUser={deleteUser} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

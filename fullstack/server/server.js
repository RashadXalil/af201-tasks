const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let id = 6
const app = express()
app.use(bodyParser())
app.use(cors())
const PORT = 8080
const products = [
  {
    id: 1,
    name: 'lorem',
    price: 10,
    description: 'ipsum',
    isDeleted: false,
  },
  {
    id: 2,
    name: 'lorem',
    price: 10,
    description: 'ipsum',
    isDeleted: false,
  },
  {
    id: 3,
    name: 'lorem',
    price: 10,
    description: 'ipsum',
    isDeleted: false,
  },
  {
    id: 4,
    name: 'lorem',
    price: 10,
    description: 'ipsum',
    isDeleted: false,
  },
  {
    id: 5,
    name: 'lorem',
    price: 10,
    description: 'ipsum',
    isDeleted: false,
  },
]
// get all
app.get('/products', (req, res) => {
  res.send(products)
})
// get by id
app.get('/products/:id', (req, res) => {
  const id = req.params.id
  const target = products.find((product) => product.id == id)
  res.send(target)
  //   setData(res.data.filter(prod=>prod.isDeleted==false))
  //   prod.isDeleted == false ? <div>In Stock</div> : <div>Out of Stock</div>
})
// add
app.post('/products', (req, res) => {
  const prod = {
    id: id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    isDeleted: false,
  }
  products.push(prod)
  id++
  res.send(`prod created : ${prod}`)
})
app.delete('/products/:id', (req, res) => {
  const id = req.params.id
  const target = products.find((product) => product.id == id)
  //   const indexOfTarget = products.indexOf(target)
  target.isDeleted = true
  //   products.splice(indexOfTarget, 1)
  res.status(200).send(`prod deleted ! id:${id}`)
})
app.listen(PORT, () => {
  console.log(`app running on ${PORT}`)
})

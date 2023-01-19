const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
let prodId = 1
let basketId = 1
const app = express()
app.use(cors())
app.use(bodyParser())
const products = [
  {
    id: 0,
    name: 'lorem',
    desc: 'ipsum',
    price: 20,
    isDeleted: false,
  },
]
const basketItems = []
// get all products
app.get('/products', (req, res) => {
  res.send(products)
})
//get prod by id
app.get('/products/:id', (req, res) => {
  const id = req.params.id
  const target = products.find((prod) => prod.id == id)
  res.send(target)
})
// delete prod
app.delete('/products/:id', (req, res) => {
  const id = req.params.id
  const target = products.find((prod) => prod.id == id)
  target.isDeleted = true
  res.status(200).send(`item deleted id:${id}`)
})
// add prod
app.post('/products', (req, res) => {
  const prod = {
    id: prodId,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    isDeleted: false,
  }
  products.push(prod)
  res.status(201).send(`item created id:${prodId}`)
  prodId++
})
//wishlist
// get all items
app.get('/basket', (req, res) => {
  res.send(basketItems)
})
app.get('/basket/:id', (req, res) => {
  const id = req.params.id
  const target = basketItems.find((item) => item.id == id)
  res.send(target)
})
app.post('/basket/:id', (req, res) => {
  const id = req.params.id
  const target = basketItems.find((item) => item.product.id == id)
  if (target) {
    target.count++
  } else {
    const item = {
      id: basketId,
      count: 1,
      product: {
        id: req.body.id,
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
      },
    }
    basketItems.push(item)
    basketId++
  }
  res.send(basketItems)
})
app.delete('/basket/:id', (req, res) => {
  const { id } = req.params
  const target = basketItems.find((prod) => prod.id == id)
  if (target.count > 1) {
    target.count--
  } else {
    const indexOfTarget = basketItems.indexOf(target)
    basketItems.splice(indexOfTarget, 1)
  }
  res.send('item deleted ')
})
app.listen(8080, () => {
  console.log('app running on 8080!')
})

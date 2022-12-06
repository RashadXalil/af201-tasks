let index = 1
let Products = []

const prodName = document.getElementById('prodName')
const prodDesc = document.getElementById('prodDesc')
const prodPrice = document.getElementById('prodPrice')
const nameInp = document.getElementById('nameInp')
const descInp = document.getElementById('descInp')
const priceInp = document.getElementById('priceInp')
const prodContainer = document.getElementById('prodContainer')
const addBtn = document.getElementById('addBtn')
class Product {
  constructor(name, price, desc) {
    ;(this.id = index),
      (this.name = name),
      (this.price = price),
      (this.desc = desc)
  }
}
function addProduct(name, price, desc) {
  let product = new Product(name, price, desc)
  Products.push(product)
  index++
  renderList(Products)
}
function deleteProduct(id) {
  let targetProduct = customFind(Products, id)
  let targetProductIndex = Products.indexOf(targetProduct)
  Products.splice(targetProductIndex, 1)
  renderList(Products)
}

function customFind(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (id == array[i].id) {
      return array[i]
    }
  }
  return 'not found'
}

addBtn.addEventListener('click', () => {
  addProduct(nameInp.value, priceInp.value, descInp.value)
  console.log(Products)
})

function renderList(arr) {
  let innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    innerHTML += `<div class="col-3 mb-5">
            <div class="card" style="width: 18rem">
            <img
                src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                class="card-img-top"
                alt="..." />
            <div class="card-body">
                <h5 class="card-title" id="prodName">${arr[i].name}</h5>
                <h2 id="prodPrice">$ ${arr[i].price}</h2>
                <p class="card-text" id="prodDesc">
                ${arr[i].desc}
                </p>
                <a href="#" class="btn btn-danger deleteBtn">Delete</a>
            </div>
            </div>
        </div>`
  }
  prodContainer.innerHTML = innerHTML

  const deleteBtns = document.getElementsByClassName('deleteBtn')
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      deleteProduct(arr[i].id)
    })
  }
}

let Products = []
let BasketItems = []
let prodId = 1
let basketId = 1
let nameInp = document.getElementById('name')
let priceInp = document.getElementById('price')
let categoryInp = document.getElementById('category')
let brandInp = document.getElementById('brand')
let prodAddBtn = document.getElementById('addBtn')
let editNameInp = document.getElementById('editName')
let editPriceInp = document.getElementById('editPrice')
let editCategoryInp = document.getElementById('editCategory')
let editBrandInp = document.getElementById('editBrand')
let editBtnSave = document.getElementById('editBtn')
let prodContainer = document.getElementById('prod__container')
let canvasBody = document.getElementById('canvasBody')
if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(Products))
} else {
  Products = JSON.parse(localStorage.getItem('products'))
}
if (!localStorage.getItem('basket')) {
  localStorage.setItem('basket', JSON.stringify(BasketItems))
} else {
  BasketItems = JSON.parse(localStorage.getItem('basket'))
}
class Product {
  constructor(name, price, category, brand) {
    ;(this.id = prodId),
      (this.name = name),
      (this.price = price),
      (this.category = category),
      (this.brand = brand)
  }
}
class BasketItem {
  constructor(product) {
    ;(this.id = basketId), (this.product = product)
  }
}
function addProduct(name, price, category, brand) {
  let product = new Product(name, price, category, brand)
  Products.push(product)
  prodId++
  localStorage.setItem('products', JSON.stringify(Products))
  renderList(Products)
}
function deleteProduct(id) {
  let target = Products.find((prod) => prod.id == id)
  let indexOfTarget = Products.indexOf(target)
  Products.splice(indexOfTarget, 1)
  localStorage.setItem('products', JSON.stringify(Products))
  renderList(Products)
}
function addToBasket(id) {
  let product = Products.find((x) => x.id == id)
  let basketItem = new BasketItem(product)
  BasketItems.push(basketItem)
  basketId++
  localStorage.setItem('basket', JSON.stringify(BasketItems))
  renderOffCanvas(BasketItems)
}
function removeBasketItem(id) {
  let target = BasketItems.find((prod) => prod.id == id)
  let indexOfTarget = BasketItems.indexOf(target)
  BasketItems.splice(indexOfTarget, 1)
  localStorage.setItem('basket', JSON.stringify(BasketItems))
  renderOffCanvas(BasketItems)
}
function renderList(array) {
  let innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    innerHTML += `
    <div class="col-3">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
              alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">${array[i].name}</h5>
              <p class="card-text">
                Price: ${array[i].price}
                Brand: ${array[i].brand}
                Category: ${array[i].category}
              </p>
              <a href="#" class="btn btn-primary" onclick="addToBasket(${array[i].id})">add to wishlist</a>
              <button class="btn btn-danger" onclick="deleteProduct(${array[i].id})">Delete</button>
              <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              onclick="editProduct(${array[i].id})"
              data-bs-target="#editModal">
              Edit
            </button>
            </div>
          </div>
          
        </div>`
  }
  prodContainer.innerHTML = innerHTML
}
renderList(Products)
function renderOffCanvas(array) {
  let innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    innerHTML += `<div class="card" style="width: 14rem; height: 400px">
    <img
      class="card-img-top"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
      alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">${array[i].product.name}</h5>
      <p class="card-text">
        Price:$ ${array[i].product.price}
        Brand: ${array[i].product.brand}
        Category: ${array[i].product.category}
      </p>
      <button class="btn btn-danger" onclick="removeBasketItem(${array[i].id})">Delete</button>
    </div>
  </div>`
  }
  canvasBody.innerHTML = innerHTML
}
renderOffCanvas(BasketItems)
prodAddBtn.addEventListener('click', () => {
  let nameVal = nameInp.value
  let priceVal = priceInp.value
  let categoryVal = categoryInp.value
  let brandVal = brandInp.value
  addProduct(nameVal, priceVal, categoryVal, brandVal)
  console.log(Products)
})
function editProduct(id) {
  // js
  let target = Products.find((x) => x.id == id)
  editBrandInp.value = target.brand
  editCategoryInp.value = target.category
  editNameInp.value = target.name
  editPriceInp.value = target.price
  editBtnSave.addEventListener('click', (e) => {
    let name = editNameInp.value
    let brand = editBrandInp.value
    let category = editCategoryInp.value
    let price = editPriceInp.value
    editProdSave(id, name, brand, category, price)
  })
}
function editProdSave(id, name, brand, category, price) {
  let target = Products.find((x) => x.id == id)
  ;(target.name = name),
    (target.brand = brand),
    (target.category = category),
    (target.price = price)
  renderList(Products)
}

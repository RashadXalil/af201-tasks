const brandInp = document.getElementById('brand')
const modelInp = document.getElementById('model')
const yearInp = document.getElementById('year')
const btn = document.getElementById('submit')
const tbody = document.getElementById('tbody')
let Cars = []
let index = 1
if (!localStorage.getItem('cars')) {
  localStorage.setItem('cars', JSON.stringify(Cars))
} else {
  Cars = JSON.parse(localStorage.getItem('cars')) // 3
  if (Cars.length > 1) {
    index = Cars.length + 1
  } else {
    index = 1
  }
}

class Car {
  constructor(brand, model, year) {
    ;(this.id = index),
      (this.brand = brand),
      (this.model = model),
      (this.year = year)
  }
}
function addCar() {
  let brandVal = brandInp.value
  let modelVal = modelInp.value
  let yearVal = yearInp.value
  let car = new Car(brandVal, modelVal, yearVal)
  index++
  Cars.push(car)
  localStorage.setItem('cars', JSON.stringify(Cars))
  brandInp.value = ''
  modelInp.value = ''
  yearInp.value = ''
}
function deleteCar(id) {
  let target = Cars.find((car) => car.id == id) // {id:3}
  let indexOfTarget = Cars.indexOf(target) // [2]
  Cars.splice(indexOfTarget, 1) // <div 2,1=""></div>
  localStorage.setItem('cars', JSON.stringify(Cars))
  renderList(Cars)
}
btn.addEventListener('click', () => {
  addCar()
  let localArr = JSON.parse(localStorage.getItem('cars'))
  renderList(localArr)
})
function renderList(array) {
  let innerHTML = ''

  for (let i = 0; i < array.length; i++) {
    innerHTML += ` <tr>
    <td>${array[i].id}</td>
    <td>${array[i].brand}</td>
    <td>${array[i].model}</td>
    <td>${array[i].year}</td>
    <td><button class="btn btn-danger deleteBtn">Delete</button></td>
  </tr>`
  }
  tbody.innerHTML = innerHTML

  const deleteBtns = document.getElementsByClassName('deleteBtn')
  for (let i = 0; i < array.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      deleteCar(array[i].id)
    })
  }
}
let localArr = JSON.parse(localStorage.getItem('cars'))
renderList(localArr)

const btnDecrease = document.getElementById('decrease')
const dispay = document.getElementById('display')
let value
const btnIncrease = document.getElementById('increase')
if (localStorage.getItem('value') == NaN) {
  localStorage.setItem('value', 0)
} else {
  value = parseInt(localStorage.getItem('value'))
}
function renderUI(value) {
  dispay.innerHTML = value
}
renderUI(value)
btnDecrease.addEventListener('click', () => {
  value--
  localStorage.setItem('value', value)
  renderUI(value)
})
btnIncrease.addEventListener('click', () => {
  value++
  localStorage.setItem('value', value)
  renderUI(value)
})

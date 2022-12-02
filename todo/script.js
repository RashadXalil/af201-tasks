let innerHTML = ''
const nameInput = document.getElementById('name')
const surnameInput = document.getElementById('surname')
const salaryInput = document.getElementById('salary')
const tBody = document.getElementById('tbody')
const addBtn = document.getElementById('addBtn')
let index = 1
addBtn.onclick = function () {
  let nameVal = nameInput.value
  let surnameVal = surnameInput.value
  let salaryVal = salaryInput.value
  innerHTML += `<tr>
  <th scope="row">${index}</th>
  <td>${nameVal}</td>
  <td>${surnameVal}</td>
  <td>${salaryVal}</td>
  <td><button class="btn btn-warning">Edit</button></td>
  <td><button class="btn btn-danger deleteBtn">Delete</button></td>
</tr>`
  tBody.innerHTML = innerHTML
  nameInput.value = ''
  surnameInput.value = ''
  salaryInput.value = ''
  index++

  let DeleteBtns = document.getElementsByClassName('deleteBtn')

  for (let i = 0; i < DeleteBtns.length; i++) {
    DeleteBtns[i].addEventListener('click', (e) => {
      tBody.removeChild(e.target.parentElement.parentElement)
    })
  }
}

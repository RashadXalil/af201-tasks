const down = document.getElementById('down')
const inp = document.getElementById('inp')
const up = document.getElementById('up')

if (localStorage.getItem('index')) {
  inp.value = localStorage.getItem('index')
}

down.addEventListener('click', () => {
  inp.value = inp.value - 1
  localStorage.setItem('index', inp.value)
})
up.addEventListener('click', () => {
  inp.value = parseInt(inp.value) + 1
  localStorage.setItem('index', inp.value)
})

const div = document.getElementById('div')
setInterval(() => {
  let number = Math.floor(Math.random() * 1000000)
  div.style.backgroundColor = `#${number}`
}, 10)

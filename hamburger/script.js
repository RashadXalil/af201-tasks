let hamburgerDiv = document.getElementsByClassName('hamburger__content')[0]
let hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', () => {
  if (hamburgerDiv.classList.contains('active')) {
    hamburgerDiv.classList.remove('active')
  } else {
    hamburgerDiv.classList.add('active')
  }
})

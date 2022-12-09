const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
let username = prompt('username:')
const WORDS = ['nigga', 'hitler']

btn.addEventListener('click', () => {
  let counter = 0
  let val = inp.value
  for (let i = 0; i < WORDS.length; i++) {
    if (val == WORDS[i]) {
      alert('you re banned !')
      localStorage.setItem('bannedUser', username)
      return
    }
    counter++
  }
  if (counter == WORDS.length) {
    alert(`${username}'s comment added`)
  }
})

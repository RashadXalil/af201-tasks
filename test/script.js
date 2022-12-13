let numbers = ''

function a() {
  for (let i = 0; i <= 13; i++) {
    let num = Math.random() // 0-1
    if (num < 0.5) {
      numbers += 1
    } else {
      numbers += 0
    }
  }
}
a()
console.log(numbers)

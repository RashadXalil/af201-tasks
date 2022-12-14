// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('done!')
//     }, 1000)
//   })

//   let result = await promise // wait until the promise resolves (*)

//   console.log(result) // "done!"
// }

// f()

// $.ajax({
//   url: 'https://dummyjson.com/products',
//   type: 'get',
//   success: function (response) {
//     console.log(response)
//   },
// })
//GET
// let index = 1

// fetch(`https://northwind.vercel.app/api/products/`, {
//   method: 'DELETE',
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// DELETE
// Example POST method implementation:
// fetch('https://northwind.vercel.app/api/products', {
//   method: 'POST',
//   body: JSON.stringify(data), // body data type must match "Content-Type" header
// })
// return response.json() // parses JSON response into native JavaScript objects
// axios.get('https://api.tvmaze.com/shows').then((res) => console.log(res.data))

// axios
//   .post('https://dummyjson.com/products', {
//     name: 'qarayev',
//   })
//   .then(function (response) {
//     console.log(response.data.products)
//   })
//   .catch(function (error) {
//     console.log(error.message)
//   })
// let innerHTML = ''
// let tb = document.getElementById('tb')
// axios.get('https://dummyjson.com/products').then((res) => {
//   let products = res.data.products
//   for (let i = 0; i < products.length; i++) {
//     innerHTML += `<tr>
//       <th scope="col">${products[i].id}</th>
//       <th scope="col">${products[i].title}</th>
//       <th scope="col">${products[i].description}</th>
//       <th scope="col">${products[i].price}</th>
//       <th scope="col">${products[i].rating}</th>
//       <th scope="col">${products[i].category}</th>
//       <th scope="col"><img width="100px" heigth="100px" src="${products[i].thumbnail}"/></th>
//     </tr>`
//   }
//   tb.innerHTML = innerHTML
// })
// new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000)
//     }),
//   )
// })
// const promise = Promise.resolve(123)

// promise.then((value) => {
//   console.log(value)
//   // expected output: 123
// })

function resolved(result) {
  console.log('Resolved')
}

function rejected(result) {
  console.error(result)
}

// Promise.reject(new Error('fail')).then(resolved, rejected)
// // expected output: Error: fail
// let promise = new Promise(resolved, rejected)
// console.log(promise.rejected)
// // https://dummyjson.com/products
// function myFunc() {
//   let array = axios.get('https://dummyjson.com/products').then((res) => {
//     return res.data.products
//   })
//   console.log(array)
// }
// myFunc()

// axios.get('https://dummyjson.com/products').then((res) => {
//   return res.data.products
// })

// async function myFunc() {
//   let array = await axios.get('https://dummyjson.com/products').then((res) => {
//     return res.data.products
//   })

//   console.log(array)
// }
// myFunc()

// $.on('button', 'click', function onClick() {
//   setTimeout(function timer() {
//     console.log('You clicked the button!')
//   }, 2000)
// })

// console.log('Hi!')

// setTimeout(function timeout() {
//   console.log('Click the button!')
// }, 5000)

// console.log('Welcome to loupe.')

// axios
//   .get(`https://northwind.vercel.app/api/products`)
//   .then((res) => console.log(res.data))

// function render(array) {
//   // let innerHTML = ''
//   // for (let i = 0; i < array.length; i++) {
//   //   innerHTML += `<li>${array[i].id}</li>`
//   // }
//   // $('ul').html(innerHTML)
//   console.log(array)
// }
// function getData() {
//   let array = axios
//     .get('https://northwind.vercel.app/api/products')
//     .then((res) => {
//       render(res.data)
//     })
// }
// getData()
let resolve = Promise.resolve([{ name: 1 }, { name: 2 }, { name: 3 }])
// let reject = Promise.reject()

resolve.then((res) => {
  if (res) {
    console.log(res)
  } else {
    console.log('error')
  }
})

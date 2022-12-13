// $(function () {
//   $('#name').focus(function () {
//     $('div').hide()
//   })
//   $('#name').blur(function () {
//     $('div').show()
//   })
// })
// $(function () {
//   $('span').hover(function () {
//     $('div').hide()
//   })
// })

// function customToggle(element, target) {
//   let classes = element.classList
//   let res = false
//   for (let i = 0; i < classes.length; i++) {
//     if (classes[i].trim() == target) {
//       res = true
//       element.classList.remove(target)
//     }
//   }
//   if (res == false) {
//     element.classList.add(target)
//   }
//   return res
// }

// function myFunc(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c
//     }
//   }
// }
// console.log(myFunc(1)(2)(3)) // return => 6
// $(function () {
//   $('#slideUp').click(function () {
//     $('p').slideUp(1000, function () {
//       alert('complated')
//     })
//   })
//   $('#slideDown').click(function () {
//     $('p').slideDown('slow', function () {
//       alert('complated')
//     })
//   })
//   $('#slideToggle').click(function () {
//     $('p').slideToggle('slow')
//   })
// })
// $(function () {
//   $('#fadeIn').click(function () {
//     $('#img').fadeIn('slow')
//   })
//   $('#fadeOut').click(function () {
//     $('#img').fadeOut('slow')
//   })
//   $('#fadeToggle').click(function () {
//     $('#img').fadeToggle('slow')
//   })
//   $('#fadeTo').click(function () {
//     $('#img').fadeTo('slow', 0.3)
//   })
// })
// $(function () {
//   $('#btn').click(function () {
//     $('.child').animate({ top: '50%' }, 'slow', function () {
//       $('.child').animate({ left: '50%' }, 'slow', function () {
//         $('.child').animate({ backgroundColor: 'green' }, 'slow')
//       })
//     })
//   })
// })

// $(function () {
//   $('#get').click(function () {
//     // alert($('p').html())
//     alert($('#a').attr('id'))
//   })
// })
// $(function () {
//   $('#btn').click(function () {
//     let text = '<p><b>salam</b> necesen</p>'
//     $('p').html(text)
//   })
// })
// $(function () {
//   $('#btn').click(function () {
//     let text = 'https://www.google.com/'
//     $('a').attr('href', `https://www.google.com/${id}`)
//   })
// })
// $(function () {
//   $('#btn').on('click', function () {
//     let div = '<div>salam</div>'
//     $('#wrapper').append(div)
//   })
// })
// $(function () {
//   $('#btn').click(function () {
//     let txt = '<p>Salam</p>'
//     $('body').html(txt)
//   })
// })
// let icon = document.querySelector('.icon')
// let middleSpan = document.querySelector('#middle')
// let firstSpan = document.querySelector('.first')
// let lastSpan = document.querySelector('.last')

// icon.addEventListener('click', () => {
//   middleSpan.classList.toggle('hidden')
//   firstSpan.classList.toggle('firstSpan')
//   lastSpan.classList.toggle('lastSpan')
// })

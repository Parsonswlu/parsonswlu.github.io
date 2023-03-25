const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// // This route path will match acd and abcd.
// app.get('/ab?cd', (req, res) => {
//     res.send('ab?cd')
//     // next()
//   })

// //   This route path will match abcd, abbcd, abbbcd, and so on.
//   app.get('/ab+cd', (req, res) => {
//     res.send('ab+cd')
//   })

// //   This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
//   app.get('/ab*cd', (req, res) => {
//     res.send('ab*cd')
//   })

// //   This route path will match /abe and /abcde.
//   app.get('/ab(cd)?e', (req, res) => {
//     res.send('ab(cd)?e')
//   })

// //   This route path will match anything with an “a” in it.
// app.get(/a/, (req, res) => {
//   res.send('/a/')
// })

// // This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })

// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
// http://localhost:3000/users/56/books/[80,81,82,2000]
// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
//   })

//   Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }

// Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
// req.params: { "genus": "Prunus", "species": "persica" }

// To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses (()):

// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}


// More than one callback function can handle a route (make sure you specify the next object). For example:
// app.get('/example/a', (req, res) => {
//     res.send('Hello from A!')
//   })

//   app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })

// An array of callback functions can handle a route. For example:

// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
// //   console.log('CB1')
//   console.log('CB1')
//   next()
// }

// const cb2 = function (req, res) {
//   res.send('Hello from C!')
// }

// app.get('/example/c', [cb0, cb1, cb2])


// A combination of independent functions and arrays of functions can handle a route. For example:

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})

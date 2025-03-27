const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 - Loggger for our application
app.use((req, res, next) => {
  console.log(req.headers)
  req.aryan = "I am aryan";
  fs.appendFileSync('log.txt', `${Date.now()} - ${req.method} - ${req.url} \n`)
  console.log(`${Date.now()} is a ${req.method}`)
  // res.send('Hello World!')
  next()
})

// Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  req.aryan = "I am Rohan bhai";
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello About!' + req.aryan)
})

app.get('/', (req, res) => {
  res.send('Hello Contant!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
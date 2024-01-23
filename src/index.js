const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  next()
})
app.use(routes)
app.listen(3000, () => console.log('Server listennig at http://localhost:3000'))

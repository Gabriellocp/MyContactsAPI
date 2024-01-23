const express = require('express')
const cors = require('./app/middlewares/cors')
const routes = require('./routes')

const app = express()

app.use(express.json())
// CORS Middleware
app.use()
app.use(routes)
app.listen(3000, () => console.log('Server listennig at http://localhost:3000'))

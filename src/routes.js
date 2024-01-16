const { Router } = require('express')
const contactController = require('./app/controllers/contactController')
const categoryController = require('./app/controllers/categoryController')

const router = Router()
// Contacts routes
router.get('/contacts', contactController.index)
router.post('/contacts', contactController.store)
router.put('/contacts/:id', contactController.update)
router.delete('/contacts/:id', contactController.delete)

// Categories routes
router.get('/categories', categoryController.index)
module.exports = router

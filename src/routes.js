const { Router } = require('express')
const contactController = require('./app/controllers/contactController')
const categoryController = require('./app/controllers/categoryController')

const router = Router()
// Contacts routes
router.get('/contacts', contactController.index)
router.get('/contacts/:id', contactController.show)
router.post('/contacts', contactController.store)
router.put('/contacts/:id', contactController.update)
router.delete('/contacts/:id', contactController.delete)

// Categories routes
router.get('/categories', categoryController.index)
router.post('/categories', categoryController.store)
router.put('/categories/:id', categoryController.update)
router.delete('/categories/:id', categoryController.delete)
module.exports = router

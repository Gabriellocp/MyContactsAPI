const { Router } = require('express')
const contactController = require('./app/controllers/contactController')

const router = Router()

router.get('/contacts', contactController.index)
router.post('/contacts', contactController.store)
router.put('/contacts/:id', contactController.update)
router.delete('/contacts/:id', contactController.delete)

module.exports = router

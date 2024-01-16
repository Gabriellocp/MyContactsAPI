const { Router } = require('express')
const contactController = require('./app/controllers/contactController')

const router = Router()

router.get('/contacts', contactController.index)
router.post('/contacts', contactController.store)

module.exports = router

const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')
const verifyJWT = require('../middleware/verifyJWT')

//router.use(verifyJWT)
router.route('/')
    .post(contactController.createNewContact)
   

module.exports = router
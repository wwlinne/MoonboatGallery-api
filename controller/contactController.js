const Contact = require('../models/Contact')
const asyncHandler = require('express-async-handler')



// @desc Create new contact
// @route POST /contacts
// @access Private
const createNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone, message } = req.body

    // Confirm data
    if (!name ||!email || !phone  ) {
        return res.status(400).json({ message: 'All fields are required' })
    }



    // Create and store the new contact 
    const contact = await Contact.create({ name, email, phone, message })


    if (contact) { //created 
        res.status(201).json({ message: `New contact ${email} created` })
    } else {
        res.status(400).json({ message: 'Invalid contact data received' })
    }
})


module.exports = {
    createNewContact
  
}
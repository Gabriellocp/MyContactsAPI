/**
 * Controller that handles contacts in the application
 * index => Returns all contacts
 * store => Creates a new contact
 * Update => Updates an existing contact
 * Delete => Deletes an existing contact
 */
const ContactRepository = require('../repositories/contactRepository')
class ContactController {
  index (request, response) {
    const { order } = request.params

    const contacts = ContactRepository.findAll(order)

    return response.json(contacts)
  }

  store () {

  }

  update () {

  }

  delete () {

  }
}
// Singleton
module.exports = new ContactController()

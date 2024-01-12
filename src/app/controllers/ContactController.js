/**
 * Controller that handles contacts in the application
 * index => Returns all contacts
 * store => Creates a new contact
 * Update => Updates an existing contact
 * Delete => Deletes an existing contact
 */
const contacts = [
  { name: 'Gabriel', age: 26 },
  { name: 'Matheus', age: 26 },
  { name: 'José', age: 32 }
]
class ContactController {
  index (request, response) {
    response.json(contacts)
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

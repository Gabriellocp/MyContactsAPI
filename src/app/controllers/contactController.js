/**
 * Controller that handles contacts in the application
 * index => Returns all contacts
 * store => Creates a new contact
 * Update => Updates an existing contact
 * Delete => Deletes an existing contact
 */
const ContactRepository = require('../repositories/contactRepository')
class ContactController {
  async index (request, response) {
    const { order } = request.params

    const contacts = await ContactRepository.findAll(order)

    return response.json(contacts)
  }

  async store (request, response) {
    const { name, email, phone, categoryId } = request.body

    if (!name || !email) {
      return response.json({ error: 'Name and email are required' })
    }
    // Add validation for pre-existing email
    const emailExists = await ContactRepository.findByEmail(email)
    if (emailExists) {
      return response.json({ error: 'This email is already registered' })
    }
    const newContact = await ContactRepository.create({ name, email, phone, categoryId })
    return response.json(newContact)
  }

  async update (request, response) {
    const { id } = request.params
    const { name, email, phone, categoryId } = request.body
    const contactExists = await ContactRepository.findById(id)
    if (!contactExists) {
      return response.json({ error: 'Contact does not exists' })
    }
    if (!name || !email) {
      return response.json({ error: 'Name and email are required' })
    }
    const emailExists = await ContactRepository.findByEmail(email)
    if (emailExists && emailExists.id === id) {
      return response.json({ error: 'This email is already in use' })
    }
    const updatedContact = await ContactRepository.update({ id, name, email, phone, categoryId })
    return response.json(updatedContact)
  }

  delete () {

  }
}
// Singleton
module.exports = new ContactController()

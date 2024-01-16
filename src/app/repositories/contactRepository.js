const db = require('../database')

class ContactRepository {
  findAll (orderBy) {
    const order = orderBy === 'desc' ? 'desc' : 'asc'
    db.query(`SELECT * FROM contacts ORDER BY ${order}`)
  }
}

module.exports = new ContactRepository()

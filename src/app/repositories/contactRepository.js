const db = require('../database')

class ContactRepository {
  async findAll (orderBy = 'asc') {
    const order = orderBy === 'desc' ? 'DESC' : 'ASC'
    await db.query(`SELECT * FROM contacts ORDER BY name ${order}`)
  }
}

module.exports = new ContactRepository()

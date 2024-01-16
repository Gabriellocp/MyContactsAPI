const db = require('../database')

class ContactRepository {
  async findAll (orderBy = 'asc') {
    const order = orderBy === 'desc' ? 'DESC' : 'ASC'
    await db.query(`SELECT * FROM contacts ORDER BY name ${order};`)
  }

  async findByEmail (email) {
    const [emailExists] = await db.query(`
        SELECT * FROM contacts WHERE email = $1
    `, [email])
    return emailExists
  }

  async create ({ name, email, phone, categoryId }) {
    const [row] = await db.query(`
        INSERT INTO contacts(name, email, phone, category_id) VALUES ($1,$2,$3,$4)
        RETURNING *
    `, [name, email, phone, categoryId])
    return row
  }
}

module.exports = new ContactRepository()

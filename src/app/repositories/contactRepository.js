const db = require('../database')

class ContactRepository {
  async findAll (orderBy = 'asc') {
    const order = orderBy === 'desc' ? 'DESC' : 'ASC'
    const contacts = await db.query(`
        SELECT contacts.*, category.name as category FROM contacts
        LEFT JOIN category ON contacts.category_id = category.id
        ORDER BY name ${order}
    
    `)
    return contacts
  }

  async findByEmail (email) {
    const [emailExists] = await db.query(`
        SELECT * FROM contacts WHERE email = $1
    `, [email])
    return emailExists
  }

  async findById (id) {
    const [contact] = await db.query(`
        SELECT * FROM contacts where id = $1
    `, [id])
    return contact
  }

  async create ({ name, email, phone, categoryId }) {
    const [row] = await db.query(`
        INSERT INTO contacts(name, email, phone, category_id) VALUES ($1,$2,$3,$4)
        RETURNING *
    `, [name, email, phone, categoryId])
    return row
  }

  async update ({ id, name, email, phone, categoryId }) {
    const [row] = await db.query(`
        UPDATE contacts SET name= $1, email=$2, phone=$3, category_id=$4 WHERE id = $5 
        RETURNING *
    `, [name, email, phone, categoryId, id])
    return row
  }

  async delete (id) {
    const deleted = await db.query(`
        DELETE FROM contacts WHERE id = $1
    `, [id])
    return deleted
  }
}

module.exports = new ContactRepository()

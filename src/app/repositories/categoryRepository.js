const db = require('../database')
class CategoryRepository {
  async findAll () {
    const categories = await db.query(`
            SELECT * FROM category
        `)
    return categories
  }

  async findByName (name) {
    const [categories] = await db.query(`
        SELECT * FROM category WHERE UPPER(name) = UPPER($1)
    `, [name])
    return categories
  }

  async findById (id) {
    const [categories] = await db.query(`
        SELECT * FROM category WHERE id = $1
    `, [id])
    return categories
  }

  async create ({ name }) {
    const createdCategory = await db.query(`
        INSERT INTO category(name) VALUES($1)
        RETURNING *
    `, [name])
    return createdCategory
  }

  async update ({ id, name }) {
    const updatedCategory = await db.query(`
        UPDATE category SET name = $1 WHERE id = $2
        RETURNING *
    `, [name, id])
    return updatedCategory
  }
}

module.exports = new CategoryRepository()

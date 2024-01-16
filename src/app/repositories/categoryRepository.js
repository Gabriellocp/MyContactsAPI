const db = require('../database')
class CategoryRepository {
  async findAll () {
    const categories = await db.query(`
            SELECT * FROM category
        `)
    return categories
  }

  async create ({ name }) {
    const createdCategory = await db.query(`
        INSERT INTO category(name) VALUES($1)
        RETURNING *
    `, [name])
    return createdCategory
  }
}

module.exports = new CategoryRepository()

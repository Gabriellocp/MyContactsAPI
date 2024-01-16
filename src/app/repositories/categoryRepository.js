const db = require('../database')
class CategoryRepository {
  async findAll () {
    const categories = await db.query(`
            SELECT * FROM category
        `)
    return categories
  }
}

module.exports = new CategoryRepository()

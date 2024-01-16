const CategoryRepository = require('../repositories/categoryRepository')

class CategoryController {
  async index (request, response) {
    const categories = await CategoryRepository.findAll()
    return response.json(categories)
  }

  async store (request, response) {
    const { name } = request.body
    if (!name) {
      return response.status(400).send({ error: 'Name is required' })
    }
    const createdCategory = await CategoryRepository.create({ name })
    return response.json(createdCategory)
  }

  update () {

  }

  delete () {

  }
}

module.exports = new CategoryController()

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

  async update (request, response) {
    const { id } = request.params
    const { name } = request.body
    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }
    const category = await CategoryRepository.findById(id)
    if (!category) {
      return response.status(400).json({ error: 'Category does not exists' })
    }
    const categoryExists = await CategoryRepository.findByName(name)
    if (categoryExists) {
      return response.status(400).json({ error: 'Category already exists' })
    }
    const updateCategory = await CategoryRepository.update({ id, name })
    return response.json(updateCategory)
  }

  async delete (request, response) {
    const { id } = request.params

    await CategoryRepository.delete(id)
    return response.sendStatus(204)
  }
}

module.exports = new CategoryController()

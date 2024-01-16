const categoryRepository = require('../repositories/categoryRepository')

class CategoryController {
  async index (request, response) {
    const categories = await categoryRepository.findAll()
    return response.json(categories)
  }

  store () {

  }

  update () {

  }

  delete () {

  }
}

module.exports = new CategoryController()

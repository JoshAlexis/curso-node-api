const { models } = require('../libs/sequelize');
const { Category } = models;

class CategoryService {
  constructor() { }

  async create(data) {
    const newCategory = await Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await Category.findByPk(id, {
      include: ['products']
    });
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const updatedCategory = category.update(changes);
    return updatedCategory;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return {
      deleted: true,
    }
  }
}

module.exports = CategoryService;

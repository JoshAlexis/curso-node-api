const faker = require("faker");
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');
const { models } = sequelize;
const { Product } = models;

class ProductService {

  constructor() { }
  async create(data) {
    const newProduct = await Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await Product.findAll({
      include: ['category']
    })
    return products;
  }

  async findOne(id) {
    const product = await Product.findByPk(id);
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const updatedProduct = await product.update(changes);
    return updatedProduct;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return {
      deleted: true
    }
  }
}

module.exports = ProductService;

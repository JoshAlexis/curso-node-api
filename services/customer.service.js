const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Customer, User } = models;

class CustomerService {
  constructor() { }

  async find() {
    const response = await Customer.findAll({
      include: ['user']
    });
    return response;
  }

  async findOne(id) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw boom.notFound('customer not found');
    return customer;
  }

  async create(data) {
    const newUser = await User.create(data.user);
    const newCustomer = await Customer.create({
      ...data,
      userId: newUser.id
    });
    return newCustomer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id)
    const response = await customer.update(changes);
    return response;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { reponse: true }
  }
}

module.exports = CustomerService;

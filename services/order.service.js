const { models } = require('./../libs/sequelize');
const { Order, OrderProduct } = models;

class OrderService {
  constructor() { }

  async create(data) {
    const newOrder = await Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await OrderProduct.create(data)
    return newItem;
  }

  async find() {
    const orders = await Order.findAll()
    return orders;
  }

  async findOne(id) {
    const order = await Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const updatedOrder = order.update(changes);
    return updatedOrder;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return {
      deleted: true
    }
  }
}

module.exports = OrderService;

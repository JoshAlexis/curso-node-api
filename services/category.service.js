const boom = require('@hapi/boom');

class CategoryService {
  constructor() { }

  create(data) {
    return data;
  }

  find() {
    return [];
  }

  findOne(id) {
    return { id };
  }

  update(id, changes) {
    return {
      id,
      changes
    };
  }

  delete(id) {
    return {
      id
    };
  }
}

module.exports = CategoryService;

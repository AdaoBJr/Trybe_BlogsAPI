const { Category } = require('../sequelize/models');

const newCategory = async ({ name }) => {
  const created = await Category.create({ name });

  console.log('criado', created);
  return created;
};

module.exports = newCategory;

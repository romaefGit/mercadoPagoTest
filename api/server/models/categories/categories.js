module.exports = function (sequelize, Sequelize) {
  return sequelize.define('categories', {
    idcategory: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    }
  }, {
    timestamps: true,
    name: { plural: 'categories', singular: 'category' }
  });
}

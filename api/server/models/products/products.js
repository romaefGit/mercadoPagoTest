module.exports = function (sequelize, Sequelize) {
  return sequelize.define('products', {
    idproduct: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    place: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    picture: {
      type: Sequelize.STRING(300),
      allowNull: false,
    },
    condition: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    free_shipping: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  }, {
    timestamps: true,
    name: { plural: 'products', singular: 'product' }
  });
}

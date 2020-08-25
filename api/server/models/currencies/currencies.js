module.exports = function (sequelize, Sequelize) {
  return sequelize.define('currencies', {
    idcurrency: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    ammount: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    },
    decimal: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    }
  }, {
    timestamps: true,
    name: { plural: 'currencies', singular: 'currency' }
  });
}

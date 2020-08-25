module.exports = function (sequelize, Sequelize) {
  return sequelize.define('users', {
    iduser: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    rol: {
      type: Sequelize.ENUM('Normal', 'Author', 'Admin'),
      allowNull: false,
    }
  }, {
    timestamps: true,
    name: { plural: 'users', singular: 'user' }
  });
}

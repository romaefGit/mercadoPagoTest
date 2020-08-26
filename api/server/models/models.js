/** Dependencias **/
var path = require('path');
var Sequelize = require('sequelize');
var globals = require('../../globals.js');

const connect = globals.getVars().db_connect;
const actions = globals.getVars().actions;

/** Database Connection **/
var sequelize = new Sequelize(connect.db_name, connect.db_user, connect.db_password, {
    host: connect.host,
    port: connect.port,
    dialect: connect.db_dialect
});

/** Models **/
// require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
var Users = require(path.join(__dirname, 'users/users'))(sequelize, Sequelize.DataTypes);
var Categories = require(path.join(__dirname, 'categories/categories'))(sequelize, Sequelize.DataTypes);
var Currencies = require(path.join(__dirname, 'currencies/currencies'))(sequelize, Sequelize.DataTypes);
var Products = require(path.join(__dirname, 'products/products'))(sequelize, Sequelize.DataTypes);

// relation table
var ProductsHasCategories = sequelize.define('ProductsHasCategories');

// 1 to 1
Products.belongsTo(Currencies, { foreignKey: 'idcurrency' });
Products.belongsTo(Users, { foreignKey: 'iduser' });

// many to many
Products.belongsToMany(Categories, { through: ProductsHasCategories, foreignKey: 'idproduct', });
Categories.belongsToMany(Products, { through: ProductsHasCategories, foreignKey: 'idcategory', });

// Exporting models
exports.Users = Users;
exports.Products = Products;
exports.Categories = Categories;
exports.Currencies = Currencies;
exports.ProductsHasCategories = ProductsHasCategories;

if (actions.syncronyzeModel) {
    /** Syncronizing the database **/
    sequelize.sync(actions.force).then(function () {
        console.log("---------------------------------------------------------");
        console.log("<<<<<<< (Success) The database is already syncronized >>>>>>>>");
        console.log("---------------------------------------------------------");
    }, function (err) {
        console.log("---------------------------------");
        console.log("<<<<<<< (Error) " + err + " >>>>>>>>");
        console.log("---------------------------------");
    });
}


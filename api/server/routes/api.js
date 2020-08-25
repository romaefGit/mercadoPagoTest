var express = require('express');
var app = express();

app.use('/products', require('./api-routes/productsRoute'));
app.use('/users', require('./api-routes/usersRoute'));
app.use('/categories', require('./api-routes/categoriesRoute'));
app.use('/currencies', require('./api-routes/currenciesRoute'));

/** Developer Router **/
module.exports = app;

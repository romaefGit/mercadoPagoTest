const express = require('express');
const path = require('path'); // to ge the main path
const logger = require('morgan'); // logs
const cons = require('consolidate');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); // to put limits of load
const routes = require('./server/routes/index'); // the routes of the server
const globals = require('./globals.js');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/products-img', express.static(__dirname + '/public/products'));

// Rutas del servidor
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// servidor
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', require('./server/routes/api'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// se pone el puerto
var conection = {
  'port': globals.getVars().port,
  'hostname': globals.getVars().hostname,
};

// mostrar por consola en que puerto está corriendo nodejs
app.listen(conection.port, conection.hostname, function () {
  console.log('------------------------------------------------------------------------------------------');
  console.log(`<<< (Success) El API está corriendo en http://${conection.hostname}:${conection.port} >>>`);
  console.log('------------------------------------------------------------------------------------------');
});
// se exporta la instacia de app
module.exports = app;

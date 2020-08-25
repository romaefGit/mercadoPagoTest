var models = require('../../models/models.js');
/**
 * Autor - Romario Estrada - www.romaef.com
 * [listCurrencies GET - lista los Currencies]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listCurrencies = function (req, res) {
    let response = {
        status: false,
        message: 'The data could not be brought of Currencies'
    };
    models.Currencies.findAll().then((Currencies) => {
        response.status = true;
        response.Currencies = Currencies;
        response.message = 'The Currencies data was brought correctly.';
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listCurrenciesBy GET - list Currencies by the name of the column]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listCurrenciesBy = function (req, res) {
    let byWhat = req.params.by;
    let response = {
        status: false,
        message: 'The data could not be brought of Currencies using the column equal to = ' + byWhat
    };
    models.Currencies.findAll({
        attributes: ['idcurrency', byWhat]
    }).then((Currencies) => {
        response.status = true;
        response.Currencies = Currencies;
        response.message = 'The Currencies data was brought correctly using the column equal to = ' + byWhat;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

exports.addCurrency = function (req, res) {
    let currency = req.body.currency;
    let response = {
        status: false,
        message: "The currency can't be created"
    };
    let currencyToSave = {
        type: currency.type,
        ammount: currency.ammount,
        decimal: currency.decimal
    };
    // console.log('currencyToSave > ', currencyToSave);
    models.Currencies.create(currencyToSave).then((save) => {
        // console.log('save >>>>>> ',save);
        response.status = true;
        response.message = 'The currency was created correctly.';
        response.idcurrency = save.idcurrency;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.editCurrency = function (req, res) {
    let id_currency = req.params.id;
    let currency = req.body.currency;
    let response = {
        status: false,
        message: "The currency couldn't be edited."
    };
    let currencyToUpdate = {
        type: currency.type,
        ammount: currency.ammount,
        decimal: currency.decimal
    };
    // console.log('currencyToUpdate > ', currencyToUpdate);
    models.Currencies.update(currencyToUpdate, {
        where: {
            idcurrency: id_currency
        }
    }).then((update) => {
        // console.log('update >>>>>> ',update);
        response.status = true;
        response.message = 'The currency was updated correctly.';
        response.idcurrency = update.idcurrency;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.deleteCurrency = function (req, res) {
    let id_currency = req.params.id;
    let url = req.params.url;
    let response = {
        status: false,
        message: "The currency can't be deleted"
    };
    models.Currencies.destroy({
        where: {
            idcurrency: id_currency
        }
    }).then((resp) => {
        // console.log('update >>>>>> ',update);
        response.status = true;
        response.message = 'The currency was deleted correctly.';
        response.idcurrency = resp;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};
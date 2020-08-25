var express = require('express');
var router = express.Router();
var CurrenciesController = require('../../controllers/currency/currencyController.js');
// console.log(CurrenciesController);

router.get('/', CurrenciesController.listCurrencies);
router.get('/:by', CurrenciesController.listCurrenciesBy);
router.post('/', CurrenciesController.addCurrency);
router.put('/:id', CurrenciesController.editCurrency);
router.delete('/:id', CurrenciesController.deleteCurrency);

module.exports = router;

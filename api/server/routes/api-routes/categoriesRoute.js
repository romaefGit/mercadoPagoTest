var express = require('express');
var router = express.Router();
var CategoriesController = require('../../controllers/category/categoryController.js');
// console.log(CategoriesController);

router.get('/', CategoriesController.listCategories);
router.get('/:by', CategoriesController.listCategoriesBy);
router.post('/', CategoriesController.addCategory);
router.put('/:id', CategoriesController.editCategory);
router.delete('/:id', CategoriesController.deleteCategory);

module.exports = router;

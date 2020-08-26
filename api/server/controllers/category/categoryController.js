var models = require('../../models/models.js');
/**
 * Autor - Romario Estrada - www.romaef.com
 * [listCategories GET - lista los Categories]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listCategories = function (req, res) {
    let response = {
        status: false,
        message: 'The data could not be brought of Categories'
    };
    models.Categories.findAll().then((Categories) => {
        response.status = true;
        response.Categories = Categories;
        response.message = 'The Categories data was brought correctly.';
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listCategoriesBy GET - list Categories by the name of the column]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listCategoriesBy = function (req, res) {
    let byWhat = req.params.by;
    let response = {
        status: false,
        message: 'The data could not be brought of Categories using the column equal to = ' + byWhat
    };
    models.Categories.findAll({
        attributes: ['idcategory', byWhat]
    }).then((Categories) => {
        response.status = true;
        response.Categories = Categories;
        response.message = 'The Categories data was brought correctly using the column equal to = ' + byWhat;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

exports.addCategory = function (req, res) {
    let category = req.body.category;
    let response = {
        status: false,
        message: "The category can't be created"
    };
    let categoryToSave = {
        name: category.name
    };
    // console.log('categoryToSave > ', categoryToSave);
    models.Categories.create(categoryToSave).then((save) => {
        // console.log('save >>>>>> ',save);
        response.status = true;
        response.message = 'The category was created correctly.';
        response.idcategory = save.idcategory;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.editCategory = function (req, res) {
    let id_category = req.params.id;
    let category = req.body.category;
    let response = {
        status: false,
        message: "The category couldn't be edited."
    };
    let categoryToUpdate = {
        name: category.name
    };
    // console.log('categoryToUpdate > ', categoryToUpdate);
    models.Categories.update(categoryToUpdate, {
        where: {
            idcategory: id_category
        }
    }).then((update) => {
        // console.log('update >>>>>> ',update);
        response.status = true;
        response.message = 'The category was updated correctly.';
        response.idcategory = update.idcategory;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.deleteCategory = function (req, res) {
    let id_category = req.params.id;
    let url = req.params.url;
    let response = {
        status: false,
        message: "The category can't be deleted"
    };
    models.Categories.destroy({
        where: {
            idcategory: id_category
        }
    }).then((resp) => {
        // console.log('update >>>>>> ',update);
        response.status = true;
        response.message = 'The category was deleted correctly.';
        response.idcategory = resp;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};
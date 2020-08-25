var models = require("../../models/models.js");

/**
 * Autor - Romario Estrada - www.romaef.com
 * [listProducts GET - This list the Products]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listProducts = function (req, res) {
    let response = {
        status: false,
        message: "The products couldn't be brought"
    };
    models.Products.findAll({
        include: [
            {
                model: models.Users,
                attributes: ["name", "lastname"]
            },
            {
                model: models.Currencies,
                attributes: ["type", "ammount", "decimal"]
            }
        ]
    }).then((Products) => {
        ProductsHasCategories
        response.status = true;
        response.products = Products;
        response.message = "The products was brought correctly.";
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listProductsBy GET - This list the Products by name of the column]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listProductsBy = function (req, res) {
    let byWhat = req.params.by;
    let response = {
        status: false,
        message: "The products couldn't be brought with that column = " + byWhat
    };
    models.Products.findAll({
        attributes: ["idproduct", byWhat]
    }).then((Products) => {
        response.status = true;
        response.products = Products;
        response.message = "The products was brought correctly with that column = " + byWhat;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listProductsBy GET - This get to the categories of the product]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.getProductCategories = function (req, res) {
    let response = {
        status: false,
        message: "The categories from product couldn't be brought"
    };
    let idProduct = req.params.id;
    models.ProductHasCategories.findAll({
        where: {
            idproduct: idProduct
        },
        attributes: ['idcategory']
    }).then((items) => {
        let itemsL = items.length;
        let arrayIds = [];
        items.forEach((v, i) => {
            arrayIds.push(v.idlanguage);
            // console.log(arrayIds.length +' == '+ itemsL)
            if (arrayIds.length == itemsL) {
                models.Categories.findAll({
                    where: {
                        $or: [
                            {
                                idcategory: arrayIds
                            },
                        ]
                    },
                    attributes: ['name']
                }).then((categories) => {
                    response.status = true;
                    response.categories = categories;
                    response.message = 'The categories data was brought correctly.';
                    res.status(200).send(response);
                }).catch((err) => {
                    response.error = err;
                    res.status(404).send(response);
                });
            }
        });
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

exports.addProduct = function (req, res) {
    let Product = req.body.product;
    let response = {
        status: false,
        message: "The product can't be created."
    };
    let ProductToSave = {
        title: Product.title,
        description: Product.description,
        place: Product.place,
        picture: Product.picture,
        condition: Product.condition,
        free_shipping: Product.free_shipping
    };
    // console.log("ProductToSave > ", ProductToSave);
    models.Products.create(ProductToSave).then((save) => {
        // console.log("save >>>>>> ",save);
        response.status = true;
        response.message = "The product was created correctly";
        response.idproduct = save.idproduct;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.editProduct = function (req, res) {
    let id_Product = req.params.id;
    let Product = req.body.product;
    let response = {
        status: false,
        message: "The product couldn't be created."
    };
    let ProductToUpdate = {
        title: Product.title,
        description: Product.description,
        place: Product.place,
        picture: Product.picture,
        condition: Product.condition,
        free_shipping: Product.free_shipping
    };
    // console.log("ProductToUpdate > ", ProductToUpdate);
    models.Products.update(ProductToUpdate, {
        where: {
            idproduct: id_Product
        }
    }).then((update) => {
        // console.log("update >>>>>> ",update);
        response.status = true;
        response.message = "The product was updated correctly";
        response.idproduct = update.idproduct;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.deleteProduct = function (req, res) {
    let id_Product = req.params.id;
    let idmedia = req.params.idmedia;
    let url = req.params.url;
    let response = {
        status: false,
        message: "The product couldn't be deleted"
    };
    models.Products.destroy({
        where: {
            idproduct: id_Product
        }
    }).then((resp) => {
        response.status = true;
        response.message = "The product was deleted correctly";
        response.idproduct = resp;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};
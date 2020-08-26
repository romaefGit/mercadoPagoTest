var models = require("../../models/models.js");
const Sequelize = require("sequelize")
var validate = require("../../validate/validate");
const { Op } = require("sequelize");


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

exports.getProductById = function (req, res) {
    let idProduct = req.params.id;
    let response = {
        status: false,
        message: "The product couldn't be brought"
    };
    models.Products.findOne({
        where: {
            idproduct: idProduct
        },
        include: [
            {
                model: models.Users,
                attributes: ["name", "lastname"]
            },
            {
                model: models.Currencies,
                attributes: ["type", "ammount", "decimal"]
            }
        ],
        attributes: ['idproduct', "picture", "title", "place", "condition", "description", "sold_quantity", "free_shipping"],
    }).then(async (Product) => {
        let getCategories = await findCategories(idProduct);
        let categories = []
        if (getCategories.status) {
            categories = getCategories.categories;
        }
        let newProduct = {
            "id": Product.idproduct,
            "picture": Product.picture,
            "title": Product.title,
            "place": Product.place,
            "author": Product.user,
            "price": Product.currency,
            "condition": Product.condition,
            "sold_quantity": Product.sold_quantity,
            "description": Product.description,
            "free_shipping": Product.free_shipping,
            "categories": categories
        }
        response.status = true;
        response.product = newProduct;
        response.message = "The product was brought correctly";
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
}
/** 
 * Autor - Romario Estrada - www.romaef.com
 * [findCategories - This get categories by idproduct]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [the categories in an array of strings in the property "categories": [...]]
 */
async function findCategories(idProduct) {
    return new Promise((resolve, reject) => {
        let response = {
            status: false,
            message: "The categories from product couldn't be brought"
        };
        models.ProductsHasCategories.findAll({
            where: {
                idproduct: idProduct
            },
            attributes: ['idcategory']
        }).then((items) => {
            let itemsL = items.length;
            if (itemsL > 0) {
                let arrayIds = [];
                items.forEach((v, i) => {
                    // console.log("ids categories > " + v.idcategory)
                    arrayIds.push(v.idcategory);
                    // console.log(arrayIds.length + ' == ' + itemsL)
                    if (arrayIds.length == itemsL) {
                        // console.log(arrayIds)
                        models.Categories.findAll({
                            where: {
                                "idcategory": arrayIds
                            },
                            attributes: ["name"]
                        }).then((categories) => {
                            response.status = true;
                            response.message = 'The categories data was brought correctly.';
                            if (validate.theValueExist(categories)) {
                                var newCategories = [];
                                categories.forEach(category => {
                                    newCategories.push(category.name);
                                    if (categories.length == newCategories.length) {
                                        response.categories = newCategories;
                                        resolve(response);
                                    }
                                });
                            } else {
                                response.categories = categories;
                                resolve(response);
                            }
                        }).catch((err) => {
                            // console.log('llego error', err)
                            response.error = err;
                            resolve(response);
                        });
                    }
                });
            } else {
                response.data = [];
                response.message = "For this (id: " + idProduct + ") of product there are not categories"
                resolve(response);
            }
        }).catch((err) => {
            response.error = err;
            resolve(response);
        })
    })
}

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listProductsBy GET - This get to the categories of the product]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.getProductCategories = async function (req, res) {
    let idProduct = req.params.id;
    var response = await findCategories(idProduct);
    if (response.status) {
        res.status(200).send(response);
    } else {
        res.status(404).send(response);
    }
};

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listProductsBy GET - this service get for the products with the text on the query?name=something]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [The datat that the people from mercado pago needs]
 */
exports.searchProducts = function (req, res) {
    let queryUrl = req._parsedUrl.query;
    queryUrlObject = JSON.parse('{"' + decodeURI(queryUrl).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    // console.log('queryUrl > ', queryUrl)
    let response = {
        status: false,
        message: "The products couldn't be brought with that query = " + queryUrl
    };
    models.Products.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: '%' + queryUrlObject.name + '%'
                    }
                },
                {
                    description: {
                        [Op.like]: '%' + queryUrlObject.name + '%'
                    }
                }
            ]
        },
        include: [
            {
                model: models.Users,
                attributes: ["name", "lastname"]
            },
            {
                model: models.Currencies,
                attributes: ["type", "ammount", "decimal"]
            }
        ],
        attributes: ['idproduct', "picture", "title", "place", "condition", "free_shipping"],
    }).then((Products) => {
        if (validate.theValueExist(Products)) {
            var newProducts = [];
            Products.forEach(async (product) => {
                let getCategories = await findCategories(product.idproduct);
                let categories = []
                if (getCategories.status) {
                    categories = getCategories.categories;
                }
                let newProduct = {
                    "id": product.idproduct,
                    "picture": product.picture,
                    "title": product.title,
                    "place": product.place,
                    "author": product.user,
                    "price": product.currency,
                    "condition": product.condition,
                    "free_shipping": product.free_shipping,
                    "categories": categories
                }
                newProducts.push(newProduct);
                if (Products.length == newProducts.length) {
                    response.status = true;
                    response.products = newProducts;
                    response.message = "The products was brought correctly with that query = " + queryUrl;
                    res.status(200).send(response);
                }
            });
        } else {
            response.products = [];
            response.message = "There are no products with that query = " + queryUrl;
            res.status(200).send(response);
        }
    }).catch((err) => {
        response.products = [];
        response.message = "There are no products with that query = " + queryUrl;
        res.status(404).send(response);
    })
}

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
        free_shipping: Product.free_shipping,
        sold_quantity: Product.sold_quantity,
        iduser: Product.iduser,
        idcurrency: Product.idcurrency,
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
        free_shipping: Product.free_shipping,
        sold_quantity: Product.sold_quantity,
        iduser: Product.iduser,
        idcurrency: Product.idcurrency,
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
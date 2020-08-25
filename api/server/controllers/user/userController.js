var models = require('../../models/models.js');
/**
 * Autor - Romario Estrada - www.romaef.com
 * [listUsers GET - lista los Users]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listUsers = function (req, res) {
    let response = {
        status: false,
        message: 'The data could not be brought of Users'
    };
    models.Users.findAll().then((Users) => {
        response.status = true;
        response.users = Users;
        response.message = 'The Users data was brought correctly.';
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

/** 
 * Autor - Romario Estrada - www.romaef.com
 * [listUsersBy GET - list users by the name of the column]
 * @param  {[object]}   req  [this have the information of the request]
 * @param  {[object]}   res  [this have the functions to send the response]
 * @return {[type]}        [description]
 */
exports.listUsersBy = function (req, res) {
    let byWhat = req.params.by;
    let response = {
        status: false,
        message: 'The data could not be brought of Users using the column equal to = ' + byWhat
    };
    models.Users.findAll({
        attributes: ['iduser', byWhat]
    }).then((Users) => {
        response.status = true;
        response.users = Users;
        response.message = 'The Users data was brought correctly using the column equal to = ' + byWhat;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    })
};

exports.addUser = function (req, res) {
    let User = req.body.user;
    let response = {
        status: false,
        message: "The user can't be created"
    };
    let UserToSave = {
        name: User.name,
        lastname: User.description,
        rol: User.rol
    };
    // console.log('UserToSave > ', UserToSave);
    models.Users.create(UserToSave).then((save) => {
        // console.log('save >>>>>> ',save);
        response.status = true;
        response.message = 'The user was created correctly.';
        response.iduser = save.iduser;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.editUser = function (req, res) {
    let id_user = req.params.id;
    let User = req.body.user;
    let response = {
        status: false,
        message: "The user clouldn't be updated."
    };
    let UserToUpdate = {
        name: User.name,
        lastname: User.description,
        rol: User.rol
    };
    // console.log('UserToUpdate > ', UserToUpdate);
    models.Users.update(UserToUpdate, {
        where: {
            iduser: id_user
        }
    }).then((update) => {
        // console.log('update >>>>>> ',update);
        response.status = true;
        response.message = 'The user was updated correctly.';
        response.iduser = update.iduser;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};

exports.deleteUser = function (req, res) {
    let id_user = req.params.id;
    let url = req.params.url;
    let response = {
        status: false,
        message: "The user can't be deleted"
    };
    models.Users.destroy({
        where: {
            iduser: id_user
        }
    }).then((resp) => {
        // console.log('update >>>>>> ',update);
        response.status = true;
        response.message = 'The user was deleted correctly.';
        response.iduser = resp;
        res.status(200).send(response);
    }).catch((err) => {
        response.error = err;
        res.status(404).send(response);
    });
};
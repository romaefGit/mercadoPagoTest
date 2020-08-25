var express = require('express');
var router = express.Router();
var UsersController = require('../../controllers/user/userController.js');
// console.log(UsersController);

router.get('/', UsersController.listUsers);
router.get('/:by', UsersController.listUsersBy);
router.post('/', UsersController.addUser);
router.put('/:id', UsersController.editUser);
router.delete('/:id', UsersController.deleteUser);

module.exports = router;

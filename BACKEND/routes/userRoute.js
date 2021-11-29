const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();
let user = require('../model/usermodel')

router
    .route('/')
    .get(userController.getAllUser)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
module.exports = router;
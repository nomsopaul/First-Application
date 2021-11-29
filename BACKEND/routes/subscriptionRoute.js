const express = require('express');
const subscriptionController = require('../controller/subscriptionController');

const router = express.Router();
let subscription = require('../model/subscriptionmodel')

router
    .route('/')
    .get(subscriptionController.getAllSubscription)
    .post(subscriptionController.createSubscription);

router
    .route('/:id')
    .get(subscriptionController.getSubscription)
module.exports = router;
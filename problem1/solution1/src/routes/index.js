const express = require('express');

const router = express.Router();
const ApiController = require('../controller/api-controller');


router.get('/number', ApiController.getAll);


module.exports = router;

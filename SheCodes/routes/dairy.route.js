const express = require('express');
const router = express.Router();

var dairy_controller = require('../controllers/dairy.controller');

router.get('/test', dairy_controller.test);

//create
router.post('/create', dairy_controller.dairy_create);

//read
router.post('/read', dairy_controller.dairy_all);

//read the last dairy
router.post('/readnewest', dairy_controller.dairy_newest);

//addfeel
router.post('/addfeel', dairy_controller.dairy_addfeel);

//update
//router.put('/update', dairy_controller.dairy_update);

//delete
//router.delete('/delete', dairy_controller.dairy_delete);

module.exports = router;
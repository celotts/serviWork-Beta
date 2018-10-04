const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category.controller');
//Router
router.get('/', categoryCtrl.getCategorys);
router.get('/:name/:skip/:limit', categoryCtrl.getCategorys);
router.post('/', categoryCtrl.crateCategory);
router.put('/:id', categoryCtrl.editCategory);
router.delete('/:id', categoryCtrl.delCategory);
router.get('/:cadena', categoryCtrl.getTregCategorys);
module.exports = router;
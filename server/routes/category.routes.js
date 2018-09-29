const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category.controller');
//Router
router.get('/', categoryCtrl.getCategorys);
router.get('/:name/:skip/:limit', categoryCtrl.getCategorys);
router.post('/', categoryCtrl.crateCategory);
router.get('/:id', categoryCtrl.getCategoryId);
router.put('/:id', categoryCtrl.editCategory);
router.delete('/:id', categoryCtrl.delCategory);
module.exports = router;
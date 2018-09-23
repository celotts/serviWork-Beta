const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category.controller');

router.get('/', categoryCtrl.getCategorys);
router.post('/', categoryCtrl.crateCategory);
router.get('/:id', categoryCtrl.getCategoryId);
router.put('/:id', categoryCtrl.editCategory);
router.delete('/:id', categoryCtrl.delCategory);
router.get('/like/:name', categoryCtrl.getlikeCategorys);
module.exports = router;
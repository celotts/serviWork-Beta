const express = require('express');
const router = express.Router(); 

const userCtrl = require('../controllers/users.controller');

router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUserId);
router.get('/:name', userCtrl.getUserUsername);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.delUser);
router.put('/:id', userCtrl.editPassword);
router.put('/:id', userCtrl.editQuestionAndResponse);
module.exports = router;
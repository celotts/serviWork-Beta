const User = require('../models/user');

const userCtrl = {}

userCtrl.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req, res, next) => {
    const user = new User({
        rut : req.body.rut,
        name : req.body.name,
        last_name : req.body.last_name,
        mother_last_name : req.body.mother_last_name,
        address : req.body.mother_last_name,
        country : req.body.country, 
        region : req.body.region,
        comuna : req.body.comuna,
        mobile_phone : req.body.mobile_phone,
        mobile_phone1 : req.body.mobile_phone1,
        username : req.body.username,
        password : req.body.password,
        security_question : req.body.security_question,
        security_response : req.bodu.security.response,
        state : 'Activo' 
    });
    await user.save();
    res.json({
        'status' : 'User saved'
    });
}

userCtrl.getUserId = async (req, res, next) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.getUserUsername = async (re, res, next) => {
    const user = await User.find(req.params.name);
     res.json(user);
}

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const user = {
        rut : req.body.rut,
        name : req.body.name,
        last_name : req.body.last_name,
        mother_last_name : req.body.mother_last_name,
        address : req.body.addres,
        country : req.body.country, 
        region : req.body.region,
        comuna : req.body.comuna,
        mobile_phone : req.body.mobile_phone,
        mobile_phone1 : req.body.mobile_phone1,
        state : 'Activo' 
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        status : 'User update'
    });
}
userCtrl.delUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
     res.json({
        status : 'User deleted'
    });
}

userCtrl.editPassword = async(req,res,next) => {
    const { id } = req.params;
    const user = {
        password : req.body.password
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
         status : 'Password updated'
    });
}
    
userCtrl.editQuestionAndResponse = async(req,res,next) => {
    const { id } = req.params;
    const user = {
        security_question : req.params.security_question,
        security_response : req.params.security_response,
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        status : 'Question and Response updated'
    });
}
module.exports = userCtrl;
const Category = require('../models/category');

const categoryCtrl = {};

categoryCtrl.getCategorys = async (req, res, next) => {
    const category = await Category.find();
     res.json(category);
}

categoryCtrl.crateCategory = async (req, res, next) => {
    const category = new Category({
       name : req.body.name 
    });
    await category.save();
     res.json({
         'status' : 'Category saved'
     });
}

categoryCtrl.getCategoryId = async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    res.json(category);
}

categoryCtrl.editCategory = async (req, res, next) => {
    const { id } = req.params;
    const category = {
        name: req.body.name
    };
    await Category.findByIdAndUpdate(id, {$set: category}, {new : true});

    res.json({
        status : 'Category update'
    });
}

categoryCtrl.delCategory = async (req, res, next) => {
    await Category.findByIdAndRemove(req.params.id);
    res.json({
        status : "Category deleted"
    });
}

module.exports = categoryCtrl;
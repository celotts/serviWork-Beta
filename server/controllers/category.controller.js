const Category = require('../models/category');

const categoryCtrl = {};

categoryCtrl.getCategorys = async (req, res, next) => {
    //const CategoryData = await 
    Category
    .find()
    .sort({ "name": 1 })
    .skip(req.body.skip - req.body.limit)
    .limit(req.body.limit)
    .exec((err, category) =>{
        res.json(category);
    })
    //res.json(CategoryData);
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
    const CategoryData = await Category.findById(req.params.id);
    res.json(CategoryData);
}

categoryCtrl.editCategory = async (req, res, next) => {
    const { id } = req.params;
    const category = {
        name: req.body.name
    };
    await Category.findByIdAndUpdate(id, {$set: category}, {new : true});
    res.json({
        status : 'Category update'+req.params
    });
}

categoryCtrl.delCategory = async (req, res, next) => {
    await Category.findByIdAndRemove(req.params.id);
    res.json({
        status : "Category deleted"
    });
}

categoryCtrl.getlikeCategorys =  (req, res, next) => {
    const vskip = 1;
    const vlimit = 3;
    var regex = new RegExp(req.params.name, "i")
    ,   query = { name: regex};
    
    const category = Category.find(query, function(err, CategoryData) {
        if (err) {
            res.json(err);
        }

        res.json(CategoryData);
    });
    //res.json(category);
}

module.exports = categoryCtrl;
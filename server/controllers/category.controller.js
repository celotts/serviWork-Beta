const Category = require('../models/category');

const categoryCtrl = {};
categoryCtrl.getCategorys = async (req, res, next) => {
    skip = req.params.skip * 1 || 1;
    limit = req.params.limit * 1 || 10;
    // Calculate record per page
    pag = ((skip * limit) - limit);
    nameAux = req.params.name; //Name Aux
    // Validate that the chain is not empty
    if(nameAux.trim().length > 0) {
        var regex = new RegExp(nameAux.trim(), "i") // Examine the business and look for the coincidence
        , query = { name: regex};
        // Generate the query
        Category
            .find(query) // Make the query
            .sort({ "name": 1 })  // Sorts Ascending - (-1 Descending)
            .skip(pag) // It is to show the amount of registration per page
            .limit(limit)  // Registration limit per page
            .exec((err, category) =>{
                if (err) return next(err);
                res.json(category); // Returns the query data
            });
    } else {
        // When the chain is empty
        Category.find() // Make the query
        .sort({ "name": 1 })  // Sorts Ascending - (-1 Descending)
        .skip(pag) // It is to show the amount of registration per page
        .limit(limit)  // Registration limit per page
        .exec((err, category) =>{
            if (err) return next(err);
                res.json(category); // Returns the query data
        })
        
    }
}
categoryCtrl.getTregCategorys = async (req, res, next) => {
    Category.find()
        .count()
        .exec((err, category) =>{
            if (err) return next(err);
            res.json(category);
        })
}
// Save New Category
categoryCtrl.crateCategory = async (req, res, next) => {
    const category = new Category({
        name : req.body.name 
    });
    await category.save();
    res.json({
        'status' : 'Category saved'
    });
}
// Get category for Id
categoryCtrl.getTregCategory = async (req, res, next) => {
    const CategoryData = await Category.find();
    res.json(CategoryData);
}
// Get category for Id
categoryCtrl.getCategoryId = async (req, res, next) => {
    const CategoryData = await Category.findById(req.params.id);
    res.json(CategoryData);
}
// Edit Category
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
// Del Category
categoryCtrl.delCategory = async (req, res, next) => {
    await Category.findByIdAndRemove(req.params.id);
    res.json({
        status : "Category deleted"
    });
}

module.exports = categoryCtrl;
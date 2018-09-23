const mongoose = require('mongoose');
const { Schema } = mongoose;
const EmployeeSchema = new Schema({
    name: {type: String, require: true},
    position:  {type: String, required: true},
    office: {type: String, required: true},
    salary: {type: Number, required: true}
});

module.exports = mongoose.model('Employee', EmployeeSchema);
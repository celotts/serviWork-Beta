const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    rut : {type: String, require : true},
    name : {type: String, require : true},
    last_name : {type: String, require : true},
    mother_last_name : {type : String},
    address : {type : String},
    country : {type : String},
    region: {type : String},
    comuna : {type: String, require: true},
    mobile_phone : {type : String},
    mobile_phone1 : {type : String},
    username : {type : String, require : true},
    password : {type: String},
    security_question : {type : String},
    security_response : {type : String},
    last_block: {type : Date},
    try_number: {type : Number}, //numero de intento
    state : {type: String, require: true} //Estado: Activo, Bloqueado 
});
module.exports = mongoose.model('User', UserSchema);
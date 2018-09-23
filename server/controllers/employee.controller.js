const Employee = require('../models/employee');

const employeeCtrl = {};
// Toma todos los empleados
employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
}
// crea un empleado
employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
     res.json({
         'status' : 'Employee saved'
     });
}
// Get employee for id
employeeCtrl.getEmployeeId = async (req, res, next) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}
//Edit employee
employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary  
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});

    res.json({
        status : 'Employee update'   
       });
}

employeeCtrl.delEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status : 'Employee deleted'   
       });
}
module.exports = employeeCtrl;
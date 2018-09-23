import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { NgForm } from '@angular/forms';


// tslint:disable-next-line:comment-format
//Declarar variablse
declare var M: any;
// component
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  sales: any[];
  // Estructura de la tabla
  employee: Employee = {
    _id : null,
    name : '',
    salary : 0,
    position : '',
    office : ''
  };
  constructor(public employeeService: EmployeeService) {
    this.employeeService.selectedEmployee = new Employee();
    console.log(employeeService.selectedEmployee);
   }

  ngOnInit() {
    this.getEmployee();
  }
  addEmployee(form: NgForm) {
    if (form.value._id == null) {
      this.employeeService.postEmployees(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployee();
          M.toast({html: 'Save Successfuly'});
          console.log(res);
      });
    }
    if (form.value._id != null ) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployee();
          M.toast({html: 'Update Successfuly'});
          console.log(res);
        });
    }
    form.value._id = null;
  }

  getEmployee() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employee = res as Employee[];
        console.log(res);
      });
  }
  resetForm(form?: NgForm) {
     form.reset();
      this.employeeService.selectedEmployee = new Employee();
  }
  editEmployee(employee: Employee) {
    this.employee = employee;
  }
  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee._id)
    .subscribe(res => {
      this.getEmployee();
      M.toast({html: 'Delete Successfuly'});
      console.log(res);
    });
  }
}

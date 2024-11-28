import { Component } from '@angular/core';
import { Employee } from './module/employee';
import { Department } from './module/department'; 
import { EmployeeService } from './employee.service';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  employee: Employee;
  employeeArr: Employee[] = [];
  employeeResult: string = "";
  employeeFlag: boolean = false;

  department: Department;
  departmentArr: Department[] = [];
  departmentResult: string = "";
  departmentFlag: boolean = false;

  constructor(
    private empService: EmployeeService,
    private deptService: DepartmentService 
  ) {
    this.employee = new Employee();
    this.department = new Department();
  }

  insertEmployee(data: any) {
    this.employee.empId = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.employee.dept.deptId=data.deptId;
    alert("deptId");
    console.log(this.employee)
    this.employeeResult = this.empService.insertEmployee(this.employee);
  }

  updateEmployee(data: any) {
    this.employee.empId = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.employeeResult = this.empService.updateEmployee(this.employee);
  }

  deleteEmployee(data: any) {
    this.employeeResult = this.empService.deleteEmployee(data.empId);
  }

  findEmployee(data: any) {
    const employee: Employee = this.empService.findEmployee(data.empId);
    this.employeeResult = `Employee ID: ${employee.empId}, Name: ${employee.empName}, Salary: ${employee.empSalary}`;
  }

  findAllEmployee() {
    this.employeeArr = this.empService.findAllEmployee();
    this.employeeFlag = true;
  }

  findEmployeeByName(data: any) {
    this.employeeArr = this.empService.findEmployeeByName(data.empName);
    this.employeeFlag = true;
  }

  deleteEmployeeByName(data: any) {
    this.employeeResult = this.empService.deleteEmployeeByName(data.empName);
  }

  findEmployeeBySalary(data: any) {
    this.employeeArr = this.empService.findEmployeeBySalary(data.empSalary);
    this.employeeFlag = true;
  }

  deleteEmployeeBySalary(data: any) {
    this.employeeResult = this.empService.deleteEmployeeBySalary(data.empSalary);
  }

  
  insertDepartment(data: any) {
    this.department.deptId = data.deptId;
    this.department.deptName = data.deptName;
    this.departmentResult = this.deptService.insertDepartment(this.department);
  }

  updateDepartment(data: any) {
    this.department.deptId = data.deptId;
    this.department.deptName = data.deptName;
    this.departmentResult = this.deptService.updateDepartment(this.department);
  }

  deleteDepartment(data: any) {
    this.departmentResult = this.deptService.deleteDepartment(data.deptId);
  }

  findDepartment(data: any) {
    const department: Department = this.deptService.findDepartment(data.deptId);
    this.departmentResult = `Department ID: ${department.deptId}, Name: ${department.deptName}`;
  }

  findAllDepartment() {
    this.departmentArr = this.deptService.findAllDepartments();
    this.departmentFlag = true;
  }
}

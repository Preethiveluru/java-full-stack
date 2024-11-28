import { Injectable } from '@angular/core';
import { Employee } from './module/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 url:string;
 employee:Employee;
 employeeArr:Employee[]=[];
 
  constructor(private  http :HttpClient) { 
    this.url="http://localhost:1212/";
    this.employee=new Employee();
  }

  insertEmployee(employee:Employee){
    // this.http.post(this.url+"create-employee",employee).subscribe();
    this.http.post(this.url+"create", employee).subscribe();
    return "employee details inserted";
  }

  updateEmployee(employee:Employee){
    // this.http.put(this.url +"update-employee",employee).subscribe();
    this.http.put(this.url+"update-employee", employee).subscribe();
    return "employee detailes updated"
  }

  deleteEmployee(eid :number){
    this.http.delete(this.url+"delete-employee/"+eid).subscribe();
    return "employee details deleted";
  }

  findEmployee(eid:number){
    // let employee : Employee=new Employee();
    this.http.get<Employee>(this.url+"read-employee/"+eid).subscribe(emp => this.employee=emp);
    return this.employee;
  }

  findAllEmployee(){
    this.http.get<Employee[]>(this.url+"readAll-employee").subscribe(empArr => this.employeeArr=empArr);
    return this.employeeArr;
  }

  findEmployeeByName(empName: string){
    // let employee : Employee=new Employee();
    this.http.get<Employee[]>(this.url+"read-employee-name/"+empName).subscribe(empArr => this.employeeArr=empArr);
    return this.employeeArr;
  }

  deleteEmployeeByName(empName :number){
    this.http.delete(this.url+"delete-employee-name/"+empName).subscribe();
    return "employee details deleted";
  }
  findEmployeeBySalary(empSalary: number){
    // let employee : Employee=new Employee();
    this.http.get<Employee[]>(this.url+"read-employee-salary/"+empSalary).subscribe(empArr => this.employeeArr=empArr);
    return this.employeeArr;
  }
  deleteEmployeeBySalary(empSalary :string){
    this.http.delete(this.url+"delete-employee-salary/"+empSalary).subscribe();
    return "employee details deleted";
  }
    
}

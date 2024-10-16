import { Injectable } from '@angular/core';
import { Employee } from './module/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 url:string;
 employee:Employee;
 employeeArr:Employee[]=[]
 
  constructor(private  http :HttpClient) { 
    this.url="http://localhost:3004/employees/";
    this.employee=new Employee();
  }

  insertEmployee(employee:Employee){
    this.http.post(this.url,employee).subscribe()
    return " employee details inserted"

  }

  updateEmployee(employee:Employee){
    this.http.put(this.url + employee.id,employee).subscribe()
    return " employee detailes updated"
  }

  deleteEmployee(eid :number){
    this.http.delete(this.url+eid).subscribe()
    return "employee details deleted"
  }

  findEmployee(eid:number){
    let employee : Employee=new Employee();
    this.http.get<Employee>(this.url+eid).subscribe(emp => this.employee=emp);
    return this.employee;
  }

  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(empArr => this.employeeArr=empArr);
    return this.employeeArr;
  }
}

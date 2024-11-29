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
    this.http.put(this.url+"update", employee).subscribe();
    return "employee detailes updated"
  }

  deleteEmployee(eid :number){
    this.http.delete(this.url+"delete/"+eid).subscribe();
    return "employee details deleted";
  }

  findEmployee(eid:number){
    // let employee : Employee=new Employee();
    this.http.get<Employee>(this.url+"get/"+eid).subscribe(emp => this.employee=emp);
    return this.employee;
  }

  findAllEmployee(){
    console.log("inside service")
    this.http.get<Employee[]>(this.url+"findall").subscribe(empArr => this.employeeArr=empArr);
    return this.employeeArr;
  }

 

  
  
    
}

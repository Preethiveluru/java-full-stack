import { Component } from '@angular/core';
import { Employee } from './module/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   employee:Employee;
   result : string="";
   employeeArr:Employee[]=[]
   flag:boolean;

   constructor(private empService : EmployeeService){
    this.employee=new Employee();
    this.flag=false
    
   }

  insertEmployee(data:any){
    this.employee.id=data.id;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;

    

    this.result = this.empService.insertEmployee(this.employee);

  }

  updateEmployee(data:any){
    this.employee.id=data.id;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;

    
    this.result = this.empService.updateEmployee(this.employee);

  }

  deleteEmployee(data:any){
    this.empService.deleteEmployee(data.id)
  }

  findEmployee(data:any){
   let employee : Employee=this.empService.findEmployee(data.id);
   this.result="Employee id :"+employee.id+"employee name :"+employee.empName;
  }

  findAllEmployee(){
    this.employeeArr=this.empService.findAllEmployee()
    this.flag=true
  }
}

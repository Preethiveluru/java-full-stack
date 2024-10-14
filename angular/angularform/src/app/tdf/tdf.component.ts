import { Component } from '@angular/core';
import { Employee } from '../model.ts/Employee';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  employee : Employee;
  flag : boolean;
  constructor(){
    this.flag=false;
    this.employee=new Employee();
  }

  onClickSubmit(data : any){
    this.employee.eid= data.eid;
    this.employee.ename= data.ename;
    this.employee.esalary= data.esalary;
    this.flag=true
  }

}

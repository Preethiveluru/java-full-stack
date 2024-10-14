import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model.ts/Employee';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  Employeeform=new FormGroup({
    eid : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    ename : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')]),
    esalary :  new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])

  })

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
 

  get eid(){
    return this.Employeeform.get('eid')
  }
  get ename(){
    return this.Employeeform.get('ename')
  }
  get esalary(){
    return this.Employeeform.get('esalary')
  }

}

import { Department } from "./department";

export class Employee {
    empId: number = 0; 
    empName: string = ""; 
    empSalary: number = 0;
    dept: Department = new Department();
  }
  
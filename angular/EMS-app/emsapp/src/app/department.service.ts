import { Injectable } from '@angular/core';
import { Department } from './module/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url: string;
  department: Department; 
  departmentArr: Department[] = []; 

  constructor(private http: HttpClient) {
    this.url = "http://localhost:1212/";
    this.department = new Department();
  }

  insertDepartment(department: Department) {
    this.http.post(this.url + "create-department", department).subscribe();
    return "Department details inserted";
  }

 
  updateDepartment(department: Department) {
    this.http.put(this.url + "update-department", department).subscribe();
    return "Department details updated";
  }

  deleteDepartment(deptId: number) {
    this.http.delete(this.url + "delete-department/" + deptId).subscribe();
    return "Department details deleted";
  }

  findDepartment(deptId: number) {
    this.http.get<Department>(this.url + "read-department/" + deptId).subscribe(dept => this.department = dept);
    return this.department;
  }

  findAllDepartments() {
    this.http.get<Department[]>(this.url + "readAll-departments").subscribe(deptArr => this.departmentArr = deptArr);
    return this.departmentArr;
  }

  
}

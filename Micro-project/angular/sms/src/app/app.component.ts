import { Component } from '@angular/core';
import { student } from './module/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student: student;
  result: string = "";
  studentArr: student[] = [];
  flag: boolean;

  constructor(private studentService: StudentService) {
    this.student = new student();
    this.flag = false;
  }

  insertStudent(data: any) {
    this.student.id = data.id;
    this.student.name = data.name;
    this.student.gender = data.gender;
    this.student.dob = data.dob;
    this.student.fatherName = data.fatherName;
    this.student.contactNo = data.contactNo;

    this.result = this.studentService.insertStudent(this.student);
  }
  updateStudent(data: any) {
    this.student.id = data.id;
    this.student.name = data.name;
    this.student.gender = data.gender;
    this.student.dob = data.dob;
    this.student.fatherName = data.fatherName;
    this.student.contactNo = data.contactNo;

    this.result = this.studentService.updateStudent(this.student);
  }

  deleteStudent(data: any) {
    this.studentService.deleteStudent(data.id);
  }

  findStudent(data: any) {
    let student: student = this.studentService.findStudent(data.id);
    this.result = "Student ID: " + student.id + ", Name: " + student.name + ", Gender: " + student.gender + ", DOB: " + student.dob + ", Father's Name: " + student.fatherName + ", Contact No: " + student.contactNo;
  }

  findAllStudents() {
    this.studentArr = this.studentService.findAllStudents();
    this.flag = true;
  }

}

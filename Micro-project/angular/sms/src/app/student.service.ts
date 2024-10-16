import { Injectable } from '@angular/core';
import { student } from './module/student';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string;
  student: student;
  studentArr: student[] = [];

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/students/";
    this.student = new student();
  }

  insertStudent(student: student) {
    this.http.post(this.url, student).subscribe();
    return "Student details inserted";
  }

  updateStudent(student: student) {
    this.http.put(this.url + student.id, student).subscribe();
    return "Student details updated";
  }
  deleteStudent(id: number) {
    this.http.delete(this.url + id).subscribe();
    return "student details deleted"
  }
  findStudent(id: number) {
    let student: student = this.student;

    this.http.get<student>(this.url + id).subscribe(stud => this.student = stud);
    return this.student;
  }

  findAllStudents() {
    this.http.get<student[]>(this.url).subscribe(studArr => this.studentArr = studArr);
    return this.studentArr;
  }
}
  
  

  



  


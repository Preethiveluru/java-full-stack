package com.sms.main;

import java.util.List;
import java.util.Scanner;
import com.sms.bean.Student;
import com.sms.dao.StudentDAO;

public class SMS {

    static Scanner sc = new Scanner(System.in);
    static StudentDAO dao = new StudentDAO();

    public static int menu() {
        System.out.println("1. Insert Student");
        System.out.println("2. Delete Student");
        System.out.println("3. Update Student");
        System.out.println("4. Find Student");
        System.out.println("5. Find All Students");
        System.out.println("6. Quit");
        System.out.println("Enter your choice:");
        return sc.nextInt();
    }

    public static Student insertStudent() {
        System.out.println("Enter student id, name, gender, contact number,dob and father's name:");
        int id = sc.nextInt();
        String name = sc.next();
        String gender = sc.next();
        String contactNo = sc.next();
       String dob = sc.next(); 
        String fatherName = sc.next();
        
        return new Student(id, name, gender, contactNo, java.sql.Date.valueOf(dob), fatherName);
    }

    public static int deleteStudent() {
        System.out.println("Enter student id to delete:");
        return sc.nextInt();
    }

    public static Student updateStudent() {
        System.out.println("Enter student id, name, gender, contact number, date of birth (YYYY-MM-DD), and father's name:");
        int id = sc.nextInt();
        String name = sc.next();
        String gender = sc.next();
        String contactNo = sc.next();
        String dob = sc.next();
        String fatherName = sc.next();

        return new Student(id, name, gender, contactNo, java.sql.Date.valueOf(dob), fatherName);
    }

    public static int findStudent() {
        System.out.println("Enter student id to find:");
        return sc.nextInt();
    }

    public static void main(String[] args) {
        String msg = "";
        int result = 0;
        
        do {
            switch(SMS.menu()) {
                case 1:
                    Student student = insertStudent();
                    result = dao.insertStudent(student);
                    
                    if (result==1)
    					System.out.println("record inserted");
    				else
    					System.out.println("record not  inserted");
    				break;
                   
                   
                case 2:
                    int idToDelete = deleteStudent();
                    result = dao.deleteStudent(idToDelete);
                    if (result==1)
    					System.out.println("record deleted");
    				else
    					System.out.println("record not  deleted");
                    break;
                case 3:
                    Student studentToUpdate = updateStudent();
                    result = dao.updateStudent(studentToUpdate);
                    if (result==1)
    					System.out.println("record updated");
    				else
    					System.out.println("record not  updated");
                    break;
                case 4:
                    int eid = findStudent();
                    Student temp = dao.findStudent(eid);
                    if (temp == null) {
                        System.out.println("Student not found");
                    } else {
                        System.out.println(temp.getId() + " " + temp.getName() + " " +
                        		temp.getGender() + " " + temp.getContactNo() + " " +temp.getDob() +" " + temp.getFatherName());
                    }
                    break;
                case 5:
                    List<Student> students = dao.findAllStudents();
                    for(Student s : students) {
                        System.out.println(s.getId() + " " + s.getName() + " " + s.getGender() + " " +
                                           s.getContactNo() + " " +s.getDob() + " " + s.getFatherName());
                    }
                    break;
                case 6:
                    System.exit(0);
            }
            System.out.println("Do you want to continue [yes/no]?");
            msg = sc.next();
        } while(msg.equalsIgnoreCase("yes"));
    }
}

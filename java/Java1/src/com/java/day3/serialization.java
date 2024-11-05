package com.java.day3;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Employee implements Serializable{
	
	transient int eid;
	String ename;
	float esalary;
	public Employee(int eid, String ename, float esalary) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.esalary = esalary;
	}
	
	public void display() {
		System.out.println("Employee id  :"+eid);
		System.out.println("Employee name :"+ename);
		System.out.println("Employee salary :"+esalary);
	}
}






public class serialization  {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		Employee emp=new Employee (101,"preeathi",2000.0f);
		
		//serialiazation
		
		FileOutputStream fout= new FileOutputStream("C:\\MyRepo\\ok.txt") ;
		ObjectOutputStream objout= new ObjectOutputStream(fout);
		objout.writeObject(emp);
		objout.close();
		fout.close();
		System.out.println("object serialized");
		
		//de-serialization

		FileInputStream fin= new FileInputStream("C:\\MyRepo\\ok.txt") ;
		ObjectInputStream objin= new ObjectInputStream(fin);
		Employee temp = (Employee)objin.readObject();
		objin.close();
		fin.close();
	    temp.display();
		

	}

}

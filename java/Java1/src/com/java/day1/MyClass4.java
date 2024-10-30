package com.java.day1;
class Employee{
	int eid;
	String ename;
	float esalary;
	
	Employee(int eid,String ename,float esalary){
		this.eid=eid;
		this.ename=ename;
		this.esalary=esalary;
		
	}
	
	void display() {
		System.out.println("employee id : " +eid);
		System.out.println("employee name : " +ename);
		System.out.println("employee salary : " +esalary);

	}
}

public class MyClass4 {
	public static void main(String[] args) {
		Employee preethi = new Employee(101,"preethi",20000.0f);
		preethi.display();
	}

}

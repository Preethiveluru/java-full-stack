package com.java.day4;

public class objectcloning implements Cloneable {
	
	int id;
	String name;
	float salary;
	
	public objectcloning(int id, String name, float salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
	}

   void display() {
	   System.out.println("Id : "+id);
	   System.out.println("name : "+name);
	   System.out.println("salary :"+salary);
   }

	
	
	public static void main(String[] args) throws CloneNotSupportedException {
		
		objectcloning obj1 = new objectcloning(101, "preethi", 1000.0f);
		obj1.display();
		
		objectcloning obj2 = (objectcloning) obj1.clone();
		obj2.display();
		
		System.out.println(obj1.hashCode());
		System.out.println(obj2.hashCode());
		

	}

}

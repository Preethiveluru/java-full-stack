package com.java.day2;



abstract class myAbstractClass{
	void mymethod1(){
		System.out.println("normal method");
	}
	abstract void mymethod2();
	abstract void mymethod3();
	
	
}

class mynormalclass extends myAbstractClass{
	void mymethod2() {
		System.out.println("abstract method1");
	}
	
	void mymethod3() {
		System.out.println("abstract method2");
	}
	
	
}

public class abstractClass {

	public static void main(String[] args) {
		myAbstractClass obj= new mynormalclass();
		obj.mymethod1();
		obj.mymethod2();

	}

}

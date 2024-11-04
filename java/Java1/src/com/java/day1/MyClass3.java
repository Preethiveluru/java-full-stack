package com.java.day1;
// types of method
public class MyClass3 {
	
	void myMethod1() {
		System.out.println("instance method");
		
	}
	
	static void myMethod2() {
		System.out.println("static or class");
	}
	
	
	
	public static void main(String[] args) {
		
		MyClass3 obj1=new MyClass3();
		
		obj1.myMethod1();
		
		MyClass3.myMethod2();
		
		
		
	}
}

package com.java.day6;

interface MyInterface{
	void myMethod1();
	default void myMethod2() {
		System.out.println("default method");
		
	}
	default void myMethod3() {
		System.out.println("default method");
		
	}
	static void myMethod() {
		System.out.println("static method");
	}
}

class NormalClass implements MyInterface{
	public void myMethod1() {
		System.out.println("abstract method");
	}
	public void myMethod2() {
		System.out.println("default method-1");
	}
	
	
	public  void myMethod() {
		System.out.println("static method");
	}
}

public class java8 {

	public static void main(String[] args) {
		MyInterface obj= new NormalClass();
		obj.myMethod1();
		obj.myMethod2();
		MyInterface.myMethod();
		

	}

}

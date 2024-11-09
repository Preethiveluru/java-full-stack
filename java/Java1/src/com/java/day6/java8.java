package com.java.day6;

interface MyInterface2{
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

class NormalClass1 implements MyInterface2{
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
		MyInterface2 obj= new NormalClass1();
		obj.myMethod1();
		obj.myMethod2();
		MyInterface2.myMethod();
		

	}

}

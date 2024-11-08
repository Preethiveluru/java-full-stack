package com.java.day6;

interface MyInterface1{
	void myMethod();
}


public class method_reference {
	void Method1() {
		System.out.println("instance ");
	}
	method_reference() {
		System.out.println("constructor");
	}
	
	static void method2() {
		System.out.println("static method");
	}
	
	
	
	public static void main(String[] args) {
		method_reference obj = new method_reference();
		MyInterface1  ref = obj :: Method1;
		ref.myMethod();
		
		ref=method_reference::method2;
		ref.myMethod();
		
		ref=method_reference::new;
		ref.myMethod();
		
		
	}

}

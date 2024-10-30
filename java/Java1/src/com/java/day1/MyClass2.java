package com.java.day1;

public class MyClass2 {
	//int a=10;
	static int a=10;
	public static void main(String[] args) {
		MyClass2 obj1= new MyClass2();
		MyClass2 obj2= new MyClass2();
		
		
		System.out.println(obj1.a);
		System.out.println(obj2.a);
		
		obj1.a=20;
		

		System.out.println(obj1.a);
		System.out.println(obj2.a);
		
	}

}

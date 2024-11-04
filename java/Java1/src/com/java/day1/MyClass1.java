package com.java.day1;

public class MyClass1 {
	
	int b=20;//instance
	static int c=30;//static
	public static void main(String args[]) {
		
		System.out.println("welcome PREETHI");
		int a=10;//local
		System.out.println(a);
		
		MyClass1 obj = new MyClass1();
		System.out.println(obj.b);
		
		System.out.println(MyClass1.c);
		
	}

}

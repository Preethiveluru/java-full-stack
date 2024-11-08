package com.java.junit;

public class Factorial {

	public int factorial(int a) {
		int fact = 1;
		for(int i=1;i<=a;i++) {
			fact = fact * i;
		}
		return fact;
	}
}

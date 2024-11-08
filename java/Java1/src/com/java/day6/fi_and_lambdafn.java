package com.java.day6;

@FunctionalInterface
interface MyInterface{
	int calculate(int x,int y);
}
public class fi_and_lambdafn {

	public static void main(String[] args) {
		MyInterface ref = (x,y) -> x+y;
		System.out.println(ref.calculate(10, 20));
		System.out.println(ref.calculate(100,200));
		
		ref = (x,y)->x-y;
		System.out.println(ref.calculate(10, 20));
		System.out.println(ref.calculate(100,200));
		

	}

}

package com.java.day4;

public class wrapperclass {

	public static void main(String[] args) {
		int a = 10;
		Integer obj1 = new Integer(a);//boxing
		int b=obj1.intValue();//unboxing
		
		//jdk1.5
		
		Integer obj2 =a;// autoboxing
		int c= obj2;//aauto unboxing
		

	}

}

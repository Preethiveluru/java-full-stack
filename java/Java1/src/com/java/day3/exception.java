package com.java.day3;

public class exception {

	public static void main(String[] args) {
		System.out.println("before exception");
		
		try {
		//int a=10/0;//throw  new arthmetic exception()
		//int a = Integer.parseInt("abc");//numberformatexception
		throw new Error();
		
		
			
			
		}catch(ArithmeticException e ) {
			System.out.println("a");
		}catch(NegativeArraySizeException e) {
			System.out.println("b");
		}catch(NumberFormatException e) {
			System.out.println("c");
		}
		catch(Exception e) {
			System.out.println("d");
		}
		catch(Error e){
			System.out.println("e");
			
		}
		
		
		System.out.println("after exception");

	}

}

package com.java.day3;

import java.util.Scanner;

class InvalidAgeException extends Exception {
	@Override
	public String toString() {
		return "invalid age";
	}
	
}

public class throwkeyword {

	public static void main(String[] args) {
		System.out.println("enter the age : ");
		int age = new Scanner(System.in).nextInt();
		try {
		if (age>18) {
			System.out.println(" voting is eligible");
		}else {
			throw new InvalidAgeException();
		}
		
		}
	
	catch(InvalidAgeException e) {
		System.out.println(e);
	}
	}

}

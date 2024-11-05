package com.java.day3;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class throwskeyword {
	static void myMethod() throws FileNotFoundException {
		FileReader fr = new FileReader("abc.txt");
	}

	public static void main(String[] args) {
		try {
			throwskeyword.myMethod();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

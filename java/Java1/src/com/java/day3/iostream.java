package com.java.day3;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class iostream {

	public static void main(String[] args) throws IOException {
		FileInputStream fin = new FileInputStream("C://MyRepo/ok.txt");
		FileOutputStream fout = new FileOutputStream("C://MyRepo/new.txt");
		int ch;
		while((ch=fin.read()) !=-1) {
			fout.write(ch);
			System.out.println((char) ch);
		}
		fin.close();
		fout.close();
		System.out.println("copied");
		
		
		

	}

}

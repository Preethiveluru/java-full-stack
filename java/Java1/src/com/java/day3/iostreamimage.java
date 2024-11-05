
package com.java.day3;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class iostreamimage {

	public static void main(String[] args) throws IOException {
		FileInputStream fin = new FileInputStream("C:\\MyRepo\th.jpg");
		FileOutputStream fout = new FileOutputStream("C:\\MyRepo\new.jpg");
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

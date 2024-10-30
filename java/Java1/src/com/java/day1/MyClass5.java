package com.java.day1;

import java.util.Scanner;

public class MyClass5 {

	public static void main(String[] args) {

    int arr[]=new int[5];
    int sum=0;
    Scanner sc = new Scanner(System.in);
    System.out.println("enter the elements");
    for(int i=0;i<arr.length;i++) {
    	arr[i]=sc.nextInt();
    }
    System.out.println("array  elements are :");
    for(int i=0;i<arr.length;i++) {
    	System.out.println(arr[i]);
    	sum=sum+arr[i];
    }
    System.out.println("sum of array :"+sum);
    sc.close();
	}

}

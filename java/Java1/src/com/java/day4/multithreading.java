package com.java.day4;

public class multithreading extends Thread{

	public static void main(String[] args) {// default thread is main method
		Thread t = Thread.currentThread();
		System.out.println(t);
		System.out.println(t.getName());
		System.out.println(t.getPriority());
		System.out.println(t.getState());
		System.out.println(t.getId());
		System.out.println(t.hashCode());
		System.out.println(t.hashCode());
		
		multithreading t1= new multithreading();// own thread
		System.out.println(t1.getName());
		System.out.println(t1.getPriority());
		
		t1.setName("aa");
		t1.setPriority(9);
		
		System.out.println(t1.getName());
		System.out.println(t1.getPriority());
		System.out.println(t1.getState());
		
		
		
		
		
		
		
		

	}

}

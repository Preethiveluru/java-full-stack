package com.java.day5;

import java.util.Enumeration;
import java.util.Iterator;
import java.util.Stack;

public class stack {

	public static void main(String[] args) {
		Stack<Integer> stack = new Stack<>();
		stack.push(10);
		stack.push(20);
		stack.push(30);
		stack.push(40);
		stack.push(50);
		
		System.out.println(stack);
		
		stack.pop();
		
		System.out.println(stack);
		
		Iterator<Integer> it = stack.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
		
		
		
		Enumeration<Integer> e = stack.elements();
		while(e.hasMoreElements()) {
			System.out.println(e.nextElement());
		}
		
		System.out.println(stack.peek());
	
		

	}

}

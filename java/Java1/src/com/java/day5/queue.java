package com.java.day5;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

public class queue {

	public static void main(String[] args) {
		Queue<Integer> qu = new LinkedList<>();
		qu.offer(10);
		qu.offer(20);
		qu.offer(30);
		qu.offer(40);
		System.out.println(qu);
		qu.poll();
		System.out.println(qu);
		
		Deque<Integer> de = new LinkedList<>();
		
		de.offer(10);
		de.offer(20);
		de.offer(30);
		de.offer(40);
		System.out.println(de);
		de.offerFirst(1);
		de.offerLast(2);
		System.out.println(de);
		de.pollFirst();
		de.pollLast();
		System.out.println(de);
		

	}

}

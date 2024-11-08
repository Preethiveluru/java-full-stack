package com.java.day5;

import java.util.ArrayList;
import java.util.Iterator;

public class collection {

	public static void main(String[] args) {
		ArrayList<Integer> list =  new ArrayList<>();
		
		list.add(10);
		list.add(20);
		list.add(30);
		list.add(40);
		list.add(50);
		System.out.println(list);
		
		list.add(2, 60);
		System.out.println(list);
		
		list.remove(2);
		System.out.println(list);
		
		list.remove(new Integer(20));
		System.out.println(list);
		
		
		// way-1 to traverse
		
		for(int i=0;i<list.size();i++) {
			System.out.println(list.get(i));
		}
		// way2
		for (Integer i : list) {
			System.out.println(i);
		}
       //way -3
		Iterator<Integer> it = list.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}

}

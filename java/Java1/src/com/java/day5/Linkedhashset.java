package com.java.day5;

import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;

public class Linkedhashset {

	public static void main(String[] args) {
		LinkedHashSet<Integer> set = new LinkedHashSet<Integer>();
		set.add(10);
		set.add(20);
		set.add(30);
		set.add(40);
		set.add(10);
		System.out.println(set);
		
		for (Integer i : set) {
			System.out.println(i);
		}
      
		Iterator<Integer> it = set.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}

	}

}

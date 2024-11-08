
package com.java.day5;


import java.util.Enumeration;
import java.util.Iterator;

import java.util.Vector;

public class vector {

	public static void main(String[] args) {
		Vector <Integer> vec =  new Vector<>();
		
		vec.add(10);
		vec.add(20);
		vec.add(30);
		vec.add(40);
		vec.add(50);
		System.out.println(vec);
		
		vec.add(2, 60);
		System.out.println(vec);
		
		vec.remove(2);
		System.out.println(vec);
		
		vec.remove(new Integer(20));
		System.out.println(vec);
		
		
		// way-1 to traverse
		
		for(int i=0;i<vec.size();i++) {
			System.out.println(vec.get(i));
		}
		// way2
		for (Integer i : vec) {
			System.out.println(i);
		}
       //way -3
		Iterator<Integer> it = vec.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
		
		// way 4
		
		Enumeration<Integer> e = vec.elements();
		while(e.hasMoreElements()) {
			System.out.println(e.nextElement());
		}
	}

}

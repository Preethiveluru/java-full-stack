package com.java.day4;

import java.util.ArrayList;

public class collection {

	public static void main(String[] args) {
		
		ArrayList<Object> list =  new ArrayList<>();
		list.add(10);
		list.add("preethi");
		list.add(100.1f);
		
		System.out.println(list);
		System.out.println(list.get(2));
		System.out.println(list.size());
		System.out.println(list.contains(10));
		list.remove(0);
		list.add(10);
		System.out.println(list);
		System.out.println(list.isEmpty());
		System.out.println(list.lastIndexOf(10));
		
		for(Object o:list)
			System.out.println(o);
		}
	
    

}

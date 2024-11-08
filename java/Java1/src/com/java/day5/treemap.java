package com.java.day5;

import java.util.Collections;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;



public class treemap {

	public static void main(String[] args) {
		TreeMap<Integer, String> map =  new TreeMap<>(Collections.reverseOrder());
		map.put(99, "preethi");
		map.put(22, "priya");
		map.put(3, "cahndra");
		map.put(4, "gautam");
		map.put(55, "lakshmi");
		System.out.println(map);
		
		//map.put(null, "aaa");
		//System.out.println(map);
		
		System.out.println(map.get(3));
		map.remove(3);
		System.out.println(map);
		
		
		//way-1
		
		Set<Integer> keys=map.keySet();
		System.out.println(keys);
		for(Integer k:keys)
			System.out.println(k+"=>"+map.get(k));
		
		//way2
		Set<Entry<Integer,String>> es =map.entrySet();
		System.out.println(es);
		for(Entry e :es)
			System.out.println(e.getKey()+"=>"+e.getValue());

	}

}
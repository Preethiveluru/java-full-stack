package com.java.day6;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class steamAPI {

	public static void main(String[] args) {
		List<Integer> list= Arrays.asList(10,11,12,13,14);
		System.out.println(list);
		
		List<Integer> evenlist = list.stream().filter(x -> x % 2 == 0).collect(Collectors.toList());
		System.out.println(evenlist);
		
		List<String> names = Arrays.asList("preethi","gautam","chandra");
		List<String> nameList = names.stream().filter(n -> n.contains("n")).collect(Collectors.toList());
		System.out.println(nameList);
		
		List<Integer> mulList = list.stream().map(x -> x*2).collect(Collectors.toList());
		System.out.println(mulList);
		
		Map<String, Integer> map = names.stream().collect(Collectors.toMap(x -> x, x -> x.length()));
		System.out.println(map);

	}

}

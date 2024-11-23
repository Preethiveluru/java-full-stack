package com.java.day6;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.hamcrest.core.StringStartsWith;

public class steamAPI2 {

	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(10, 20, 20, 70, 50, 49, 20, 70, 40);

		// evenlist
		List<Integer> evenlist = list.stream().filter(x -> x % 2 == 0).collect(Collectors.toList());
		System.out.println(evenlist);

		// starts with 1

		List<Integer> one = list.stream().filter(x -> String.valueOf(x).startsWith("1")).collect(Collectors.toList());
		System.out.println(one);

		// duplicates

		List<Integer> duplist = list.stream().filter(x -> list.indexOf(x) != list.lastIndexOf(x))
				.collect(Collectors.toList());
		System.out.println(duplist);
		Set<Integer> dupset = list.stream().filter(x -> list.indexOf(x) != list.lastIndexOf(x))
				.collect(Collectors.toSet());
		System.out.println(dupset);
		Set<Integer> tempset = new HashSet<>();
	//	long duplicatecount = list.stream().filter(x -> tempset.add(x) == false).count();
		//System.out.println(duplicatecount);

		// find first element in list

		int firstelement = list.stream().findFirst().get();
		System.out.println(firstelement);

		// total elements in list

		long totalelements = list.stream().count();
		System.out.println(totalelements);

		// max element

		int max = list.stream().max((x, y) -> x - y).get();
		System.out.println(max);

		// sort employee object using salary

		List<Employee> emplist = Arrays.asList(new Employee(101, "preethi", 5000), new Employee(102, "priya", 4567),
				new Employee(103, "gowdham", 6789));
		List<Employee> sortList = emplist.stream().sorted((e1, e2) -> (e1.salary - e2.salary))
				.collect(Collectors.toList());
		System.out.println(sortList);

		// sorting the list

		List<Integer> sort = list.stream().sorted().collect(Collectors.toList());
		System.out.println(sort);

		// sorting in desc
		List<Integer> desc = list.stream().sorted((x, y) -> (y - x)).collect(Collectors.toList());
		System.out.println(desc);

		
		boolean flag = list.stream().filter(x -> tempset.add(x) == false).count() > 0 ? true : false;
		System.out.println(flag);

	}

}

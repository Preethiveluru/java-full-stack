package com.java.day3;

public class StringMethod {

	public static void main(String[] args) {
		String s1 = "java";
		String s2 = new String("Java");
		char ch[] = {'h','i'};
		String s3 = new String(ch);
		
		System.out.println(s1.equals(s2));
		System.out.println(s1.equalsIgnoreCase(s2));
		System.out.println(s1.charAt(1));
		System.out.println(s1.indexOf('a'));
		System.out.println(s1.lastIndexOf('a'));
		System.out.println(s1.toLowerCase());
		System.out.println(s1.toUpperCase());
		
		System.out.println(s1.startsWith("ja"));
		System.out.println(s1.endsWith("va"));
		
		System.out.println(s1.replace('a', 'b'));
		
		String s4="java world";
		System.out.println(s4.substring(4, 6));
		System.out.println(s4.substring(2));
		System.out.println(s4.trim());
		String temp[]=s4.split(" ");
		for(String S:temp)
			System.out.println(S);
		char t[] = s4.toCharArray();	
		for(char s:t)
			System.out.println(s);
		
		// == or equals
		
		String s5 = new String ("hello");
		String s6 = new String ("hello");
		System.out.println(s5==s6);
		System.out.println(s5.equals(s6));
		
		String s7 = "java";
		System.out.println(s7==s1);
		
		String s8 = "java";
		s8 = s8.concat("world");
		
		System.out.println(s8);
		
		StringBuffer sb = new StringBuffer("java");
		sb.append("world");
		System.out.println(sb);
		System.out.println(sb.length());
		System.out.println(sb.capacity());
		System.out.println(sb.reverse());

	}

}

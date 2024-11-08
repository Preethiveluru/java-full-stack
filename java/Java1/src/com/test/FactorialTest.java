package com.test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.java.junit.Factorial;

public class FactorialTest {

	@Test
	public void testAddition() {
		Factorial fact = new Factorial();
		int actual = fact.factorial(5);
		int expected = 120 ;
		 assertEquals(expected, actual);
		
		
	}
}

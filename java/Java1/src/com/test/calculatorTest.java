package com.test;

import static org.junit.Assert.*;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.After;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import com.java.junit.calculator;

public class calculatorTest {

	@Test
	public void testAddition() {
		calculator calc = new calculator();
		int actual = calc.addition(10, 20);
		int expected = 30 ;
		 assertEquals(expected, actual);
		
		
	}

	@Test
	public void testSubtraction() {
		calculator calc = new calculator();
		int actual = calc.subtraction(10, 20);
		int expected = -10 ;
		 assertEquals(expected, actual);
		
	}



/*
	@BeforeClass
	public static void beforeClass() {
		System.out.println("before class");
	}
	

	@AfterClass
	public static void AfterClass() {
		System.out.println("After class");
	}
	
	@Before
    public void before() {
    	System.out.println("before");
    }
	
	@After
	public void After() {
		System.out.println("After ");
	}
	
	@Test
	public void tst() {
	System.out.println("test");
	}
	
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
	
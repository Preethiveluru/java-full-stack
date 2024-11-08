package com.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import com.test.FactorialTest;
import com.test.calculatorTest;

@RunWith(Suite.class)
@SuiteClasses({
	calculatorTest.class,
	FactorialTest.class
})

public class Alltest {

}

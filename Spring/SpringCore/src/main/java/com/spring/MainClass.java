package com.spring;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class MainClass {
	public static void main(String[] args) {
		//Employee emp = new Employee();//TCA
		//System.out.println(emp);
//		
//		Resource resource = new ClassPathResource("Beans.xml");
//		BeanFactory factory = new XmlBeanFactory(resource);
		
		
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		Employee emp1=(Employee) context.getBean("emp1");
//		System.out.println(emp1);
//		
//		Employee emp2=(Employee) context.getBean("emp2");
//		System.out.println(emp2);
//		
		Employee emp3=(Employee) context.getBean("emp3");
		System.out.println(emp3);
		
		Employee emp4=(Employee) context.getBean("emp4");
		System.out.println(emp4);
		
		Question ques = (Question) context.getBean("question");
		System.out.println(ques);
		
		Question ques1 = (Question) context.getBean("question1");
		System.out.println(ques1);
		
//		Book book = (Book) context.getBean("book1");
//		System.out.println(book);
//		
//		Book book1 = (Book) context.getBean("book2");
//		System.out.println(book1);
		
		Book book = (Book) context.getBean("book1");
		System.out.println(book);
		
		Hello hello1 = (Hello) context.getBean("hello");
		System.out.println(hello1.getMessage());
		
		hello1.setMessage("BYE");
		System.out.println(hello1.getMessage());
		
		Hello hello2 = (Hello) context.getBean("hello");
		System.out.println(hello2.getMessage());
		
		
	}

}

package com.java.day6;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

public class date {

	public static void main(String[] args) {
		//Date date = new Date();
		//System.out.println(date);
		//System.out.println(date.getDate());
		//System.out.println(date.getDay());
		//System.out.println(date.getYear());
		
		
		LocalDate date = LocalDate.now();
		System.out.println(date);
		System.out.println(date.getMonth());
		System.out.println(date.getDayOfWeek());
		System.out.println(date.getYear());
		
		LocalTime time = LocalTime.now();
		System.out.println(time.getHour());
        System.out.println(time.getMinute());
        
        LocalDateTime dt = LocalDateTime.now();
        System.out.println(dt);
	}

}

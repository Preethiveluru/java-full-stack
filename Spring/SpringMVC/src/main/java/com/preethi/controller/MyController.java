package com.preethi.controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.preethi.bean.EmployeeBean;

@Controller
public class MyController {
	@RequestMapping("/welcome")
	public ModelAndView welcome(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Welcome");
		return mv;
	}
	@RequestMapping("/hello")
	public ModelAndView hello(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Hello");
		return mv;
		}
	
	@RequestMapping("/employee")
		public ModelAndView loadEmployeeForm(){
			ModelAndView mv = new ModelAndView();
			mv.setViewName("EmployeeForm");
			return mv;
	}
	@RequestMapping("/employee_data")
	public ModelAndView readEmployeeData(@ModelAttribute("employee") EmployeeBean employee){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Employee_details");
		mv.addObject("emp", employee);
		return mv;
	}

}

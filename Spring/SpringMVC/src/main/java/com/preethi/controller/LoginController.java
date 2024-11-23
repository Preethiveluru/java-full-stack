package com.preethi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.preethi.bean.EmployeeBean;
import com.preethi.bean.Loginform;
@Controller
public class LoginController {

    @RequestMapping("/loginform")
    public ModelAndView loadEmployeeForm() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("LoginForm");
        return mv;
    }

    @RequestMapping("/login_data")
    public ModelAndView readEmployeeData(@ModelAttribute("loginform") Loginform login) {
        ModelAndView mv = new ModelAndView();
        
        if ("Admin".equals(login.getUsername()) && "1234".equals(login.getPassword())) {
            mv.setViewName("Success");
            mv.addObject("message1", "Login Successful!");
        } else {
            mv.setViewName("Failure");
            mv.addObject("message2", "Invalid username or password!");
        }
        return mv;
    }
}

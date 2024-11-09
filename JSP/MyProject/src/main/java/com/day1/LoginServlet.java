package com.day1;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		 String Username = request.getParameter("name");
		 String password = request.getParameter("pw");
		 
		 if(Username.equals("Admin") && password.equals("1234")) {
			/* RequestDispatcher rd= request.getRequestDispatcher("loginSuccess.jsp");
			 rd.forward(request, response);*/
			 response.sendRedirect("loginSuccess.jsp");
			 
		 }
		 else {
			/* RequestDispatcher rd= request.getRequestDispatcher("Login.jsp");
			 rd.include(request, response);
			 out.println("<font color = \"red\"><b> Invalid username and password</b> </font>");*/
			 response.sendRedirect("loginfail.jsp");
		 }
	}

}

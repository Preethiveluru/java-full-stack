gpackage com.day1;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Calculator")
public class Calculator extends HttpServlet {
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int n1=Integer.parseInt(request.getParameter("n1"));
		int n2=Integer.parseInt(request.getParameter("n2"));
		
		String tf= request.getParameter("aa");
		
	    PrintWriter out = response.getWriter();
	    
	    if(tf.equals("Addition")) {
	    	 RequestDispatcher rd= request.getRequestDispatcher("Calculator.jsp");
			 rd.include(request, response);
		     out.println("<font color = 'blue'>"+(n1+n2)+"</font>");}
	    
	    if(tf.equals("subtraction")) {
	    	 RequestDispatcher rd= request.getRequestDjispatcher("Calculator.jsp");
		     rd.include(request, response);
			out.println("<font color = 'blue'>"+(n1-n2)+"</font>");}
	    if(tf.equals("multiplication")) {
	    	 RequestDispatcher rd= request.getRequestDispatcher("Calculator.jsp");
			 rd.include(request, response);
	    
			out.println("<font color = 'blue'>"+(n1*n2)+"</font>");}
	    if(tf.equals("division")) {
	    	 RequestDispatcher rd= request.getRequestDispatcher("Calculator.jsp");
			 rd.include(request, response);
	    
			out.println("<font color = 'blue'>"+(n1/n2)+"</font>");}
		
		out.close();
	}

}

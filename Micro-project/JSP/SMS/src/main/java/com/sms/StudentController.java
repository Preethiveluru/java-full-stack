package com.sms;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sms.bean.Student;
import com.sms.dao.StudentDAO;

@WebServlet("/StudentController")
public class StudentController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static StudentDAO dao = new StudentDAO();
	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String operation = request.getParameter("operation");
		RequestDispatcher rd = request.getRequestDispatcher("form.jsp");
		rd.include(request, response);

		if(operation.equalsIgnoreCase("insert")) {
			int id = Integer.parseInt(request.getParameter("id"));
			String name = request.getParameter("name");
			String gender = request.getParameter("gender");
			String contactNo = request.getParameter("contactNo");
			String fatherName = request.getParameter("fatherName");
			Date dob = null;

			try {
				dob = dateFormat.parse(request.getParameter("dob"));
			} catch (ParseException e) {
				e.printStackTrace();
				out.println("<br><center><font color='red'>Invalid Date Format</font></center>");
				return;
			}

			Student std = new Student(id, name, gender, contactNo, dob, fatherName);
			int n = dao.insertStudent(std);
			if (n == 1) {
				out.println("<br><center><font color='green'>Record Inserted Successfully</font></center>");
			} else {
				out.println("<br><center><font color='red'>Record Not Inserted</font></center>");
			}
		}

		if(operation.equalsIgnoreCase("update")) {
			int id = Integer.parseInt(request.getParameter("id"));
			String name = request.getParameter("name");
			String gender = request.getParameter("gender");
			String contactNo = request.getParameter("contactNo");
			String fatherName = request.getParameter("fatherName");
			Date dob = null;

			try {
				dob = dateFormat.parse(request.getParameter("dob"));
			} catch (ParseException e) {
				e.printStackTrace();
				out.println("<br><center><font color='red'>Invalid Date Format</font></center>");
				return;
			}

			Student std = new Student(id, name, gender, contactNo, dob, fatherName);
			int n = dao.updateStudent(std);

			if (n == 1) {
				out.println("<br><center><font color='green'>Record Updated Successfully</font></center>");
			} else {
				out.println("<br><center><font color='red'>Record Not Updated</font></center>");
			}
		}

		if(operation.equalsIgnoreCase("delete")) {
			int id = Integer.parseInt(request.getParameter("id"));
			int n = dao.deleteStudent(id);

			if (n == 1) {
				out.println("<br><center><font color='green'>Record Deleted Successfully</font></center>");
			} else {
				out.println("<br><center><font color='red'>Record Not Deleted</font></center>");
			}
		}

		if(operation.equalsIgnoreCase("find")) {
			int id = Integer.parseInt(request.getParameter("id"));
			Student student = dao.findStudent(id);

			if (student == null) {
				out.println("<br><center><font color='red'>Record Not Found</font></center>");
			} else {
				out.println("<br><center><font color='green'><b>" 
						+ student.getId() + "<br>" 
						+ student.getName() + "<br>" 
						+ student.getGender() + "<br>" 
						+ student.getContactNo() + "<br>" 
						+ dateFormat.format(student.getDob()) + "<br>" 
						+ student.getFatherName() + "</b></font></center>");
			}
		}

		if(operation.equalsIgnoreCase("findAll")) {
			List<Student> list = dao.findAllStudents();

			if (list.isEmpty()) {
				out.println("<br><center><font color='red'>No Records Found</font></center>");
			} else {
				for (Student s : list) {
					out.println("<br><center><font color='green'><b>" 
							+ s.getId() + " " 
							+ s.getName() + " " 
							+ s.getGender() + " " 
							+ s.getContactNo() + " " 
							+ dateFormat.format(s.getDob()) + " " 
							+ s.getFatherName() + "</b></font></center>");
				}
			}
		}
	}
}

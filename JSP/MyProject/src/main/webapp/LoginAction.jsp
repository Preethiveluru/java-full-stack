<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 
String Username = request.getParameter("name");
String password = request.getParameter("pw");
if(Username.equals("Admin") && password.equals("1234")) {
	%>
	<jsp:forward page="loginSuccess.jsp"></jsp:forward>
	<%
	}
else{
	%>
	<jsp:include page="Login.jsp"></jsp:include>
	<% 
	out.println("<font color = red><b>invalid username or password </b></font>");
}

%>
</body>
</html>
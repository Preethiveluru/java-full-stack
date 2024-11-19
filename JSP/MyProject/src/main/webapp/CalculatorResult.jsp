<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ include file = "Calculator.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String requestForm = request.getParameter("aa");
int n1 = Integer.parseInt(request.getParameter("n1"));
int n2 = Integer.parseInt(request.getParameter("n2"));

if(requestForm.equals("Addition")){
	out.println("<font color = 'blue'>"+(n1+n2)+"</font>");
}
if(requestForm.equals("subtraction")){
	out.println("<font color = 'blue'>"+(n1-n2)+"</font>");
}
if(requestForm.equals("multiplication")){
	out.println("<font color = 'blue'>"+(n1*n2)+"</font>");
}
if(requestForm.equals("division")){
	out.println("<font color = 'blue'>"+(n1/n2)+"</font>");
}



%>

</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%--declaration tag --%>

<%!int a=10,b=20;
String name ="preethi";
%>
<%--scriplet tag --%>
<%
int sum = a + b;
if(a>b)
	out.println("A is big");
else
	out.println("B is big");
%>
<br>
<%--expression tag --%>

addition = <%= sum %><br>
welcome <%= name %><br>
today's date = <%= new Date() %> 
 

</body>
</html>
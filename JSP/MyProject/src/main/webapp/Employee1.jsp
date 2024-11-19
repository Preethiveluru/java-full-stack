<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<jsp:useBean id="emp" class="com.day1.Employee"></jsp:useBean>
<jsp:setProperty property="eid" name="emp" value="101"/>
<jsp:setProperty property="ename" name="emp" value="preethi"/>
<jsp:setProperty property="esalary" name="emp" value="100000"/>
<jsp:getProperty property="eid" name="emp"/>
<jsp:getProperty property="ename" name="emp"/>
<jsp:getProperty property="esalary" name="emp"/>

</body>
</html>
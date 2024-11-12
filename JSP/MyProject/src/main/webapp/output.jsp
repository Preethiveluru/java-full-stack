<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.math.BigInteger" %>
<!DOCTYPE html>
<html>
<head>
    <title>Factorial Table</title>
</head>
<body>
    <h2>Factorial Table</h2>

    <%
    RequestDispatcher rd= request.getRequestDispatcher("input.jsp");
    rd.include(request, response);
        String numberStr = request.getParameter("number");
        int number = Integer.parseInt(numberStr);

        BigInteger factorial = BigInteger.ONE;

        out.println("<table border='1'>");
        out.println("<tr><th>Number</th><th>Factorial</th></tr>");
        for (int i = 1; i <= number; i++) {
            factorial = factorial.multiply(BigInteger.valueOf(i));
            out.println("<tr><td>" + i + "</td><td>" + factorial + "</td></tr>");
        }
        out.println("</table>");
    %>
</body>
</html>

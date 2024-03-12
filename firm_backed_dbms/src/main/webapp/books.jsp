<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.leonteqsecurity.com.firm_backed_dbms.Models.Book" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Book List</title>
</head>
<body>
<h1>Book List</h1>
<table border="1">
    <thead>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Date</th>
        <th>Genres</th>
        <th>Characters</th>
        <th>Synopsis</th>
    </tr>
    </thead>
    <tbody>
    <%
        ArrayList<Book> books = (ArrayList<Book>) request.getAttribute("books");
        for (Book book : books) {
    %>
    <tr>
        <td><%= book.getId() %></td>
        <td><%= book.getTitle() %></td>
        <td><%= book.getAuthor() %></td>
        <td><%= book.getDate() %></td>
        <td><%= book.getGenres() %></td>
        <td><%= book.getCharacters() %></td>
        <td><%= book.getSynopsis() %></td>
    </tr>
    <% } %>
    </tbody>
</table>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.leonteqsecurity.com.firm_backed_dbms.Models.Book" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Book List</title>
    <link rel="stylesheet" type="text/css" href="css/alldata.css">
    <style>

        .page_container
        {
            display: flex;
        }
        .display_container
        {
            width: 100%;
            overflow: auto;
        }

    </style>
</head>
<body>

<div class="page_container">
    <div class="side_bar_d">
<%@ include file="Components/sidebarNav.jsp"%>
    </div>
    <div class="display_container">
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

    </div>

</div>
</body>
</html>

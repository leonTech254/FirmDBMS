<%--<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>--%>
<%@ page import="com.leonteqsecurity.com.firm_backed_dbms.Models.Book" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/alldata.css">
    <style>
        .search_container {
            background-color: #141d2b;
            width: 80%;
            margin: auto;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin-top: 10px;
        }
        form{
            display: flex;
            width: 100%;
        }
        .search_container input[type="search"] {
            width: 80%;
            padding: 10px;
            border: none;
            background: none;
            color: #ffffff;
            font-weight: bold;
            outline: none;
        }
        .search_container button {
            padding: 10px;
            width: 20%;
            background-color: #141d2b;
            color: #fff;
            font-weight: bold;
            border: none;
            cursor: pointer;
        }
        .search_results {
            margin-top: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #dddddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<div class="search_container">
    <form id="searchForm" onsubmit="submitForm(); return false;">
        <input type="search" name="query" id="searchQuery" placeholder="Search by title or author"/>
        <button type="submit">Search Data</button>
    </form>
</div>

<table border="1" id="booksTable" class="table table-bordered table-sm">
    <thead>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Date</th>
        <th>Genres</th>
        <th>Characters</th>
        <th>Synopsis</th>
        <th>Action</th> <!-- New column for delete button -->
    </tr>
    </thead>
    <tbody>
    <% ArrayList<Book> books = (ArrayList<Book>) request.getAttribute("books");
        for (Book book : books) { %>
    <tr>
        <td><%= book.getId() %></td>
        <td><%= book.getTitle() %></td>
        <td><%= book.getAuthor() %></td>
        <td><%= book.getDate() %></td>
        <td><%= book.getGenres() %></td>
        <td><%= book.getCharacters() %></td>
        <td><%= book.getSynopsis() %></td>
        <td>
            <form action="BookServlet" method="post">
                <input type="hidden" name="action" value="delete">
                <input type="hidden" name="id" value="<%= book.getId() %>">
                <input type="submit" value="Delete" class="btn btn-danger btn-sm">
            </form>
        </td>
    </tr>
    <% } %>
    </tbody>
</table>

<script>
    function submitForm() {
        var query = document.getElementById("searchQuery").value.toLowerCase();
        var table = document.getElementById("booksTable");
        var rows = table.getElementsByTagName("tr");

        for (var i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
            var title = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
            var author = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase();
            if (title.indexOf(query) > -1 || author.indexOf(query) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
</script>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add New Book</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }
    h2 {
        color: #333;
    }
    form {
        background-color: #fff;
        max-width: 500px;
        margin: 20px auto;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }
    input[type="text"],
    input[type="date"],
    textarea {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }
    input[type="submit"]:hover {
        background-color: #45a049;
    }
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
<body>
<div class="page_container">
    <div class="side_bar_d">
        <%@ include file="Components/sidebarNav.jsp"%>
    </div>
<div class="display_container">
<form action="BookServlet?action=insert" method="post">
    <label for="title">Title:</label><br>
    <input type="text" id="title" name="title" required><br><br>

    <label for="author">Author:</label><br>
    <input type="text" id="author" name="author" required><br><br>

    <label for="date">Date:</label><br>
    <input type="date" id="date" name="date" required><br><br>

    <label for="genres">Genres:</label><br>
    <input type="text" id="genres" name="genres" required><br><br>

    <label for="characters">Characters:</label><br>
    <input type="text" id="characters" name="characters" required><br><br>

    <label for="synopsis">Synopsis:</label><br>
    <textarea id="synopsis" name="synopsis" rows="4" cols="50" required></textarea><br><br>

    <input type="submit" value="Add Book">
</form>
</div>
</div>

</body>
</html>

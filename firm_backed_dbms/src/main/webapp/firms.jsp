<%@ page import="java.util.List" %>
<%@ page import="com.leonteqsecurity.com.firm_backed_dbms.Models.Film" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
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
        .film-container
        {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: .1rem;
            padding: 10px;
        }
        .film-card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
            width: 300px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }
        .film-title {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 5px;
        }
        .film-details {
            font-size: 14px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
<div class="page_container">
    <div class="side_bar_d">
        <%@ include file="Components/sidebarNav.jsp"%>
    </div>
    <div class="display_container">
<div class="film-container">
    <% List<Film> filmList = (List<Film>) request.getAttribute("films"); %>
    <% for (Film film : filmList) { %>
    <div class="film-card">
        <div class="film-title"><%= film.getTitle() %></div>
        <div class="film-details">
            <strong>Year:</strong> <%= film.getYear() %><br>
            <strong>Director:</strong> <%= film.getDirector() %><br>
            <strong>Stars:</strong> <%= film.getStars() %><br>
            <strong>Review:</strong> <%= film.getReview() %>
        </div>
    </div>
    <% } %>
</div>
    </div>
</div>
</body>
</html>

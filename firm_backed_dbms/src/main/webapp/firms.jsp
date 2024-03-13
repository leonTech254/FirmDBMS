<%@ page import="java.util.List" %>
<%@ page import="com.leonteqsecurity.com.firm_backed_dbms.Models.Film" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .page_container {
            display: flex;
        }
        .display_container {
            width: 100%;
            overflow: auto;
        }
        .film-container {
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
        .form-container {
            display: flex;
            justify-content: space-between;
        }

        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }
        /* Close button */
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        #updateForm   form {
            background-color: #fff;
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        #updateForm   label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }
        #updateForm  input[type="text"],
        #updateForm  input[type="date"],
        #updateForm   textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        #updateForm  input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .updateModal input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
<div class="page_container">
    <div class="side_bar_d">
        <%@ include file="Components/sidebarNav.jsp"%>
    </div>
    <div class="display_container">

        <!-- Modal -->
        <div id="updateModal" class="modal">
            <div class="modal-content"  style="width: 50%;margin: auto;">
                <span class="close">&times;</span>
                <h2>Update Film</h2>
                <!-- Update Form -->
                <form id="updateForm" action="firms" method="post">
                    <input type="hidden" id="updateId" name="id">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required><br>
                    <label for="year">Year:</label>
                    <input type="text" id="year" name="year" required><br>
                    <label for="director">Director:</label>
                    <input type="text" id="director" name="director" required><br>
                    <label for="stars">Stars:</label>
                    <input type="text" id="stars" name="stars" required><br>
                    <label for="review">Review:</label>
                    <textarea id="review" name="review" required></textarea><br>
                    <input type="submit" value="Update">
                </form>

            </div>
        </div>

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
                <div class="form-container">
                    <button type="button" class="update-button btn btn-primary" data-id="<%= film.getId() %>">Update</button>

                    <form action="firms?action=delete" method="post">
                        <input type="hidden" name="action" value="delete">
                        <input type="hidden" name="id" value="<%= film.getId() %>">
                        <input type="submit" value="Delete" class="btn btn-danger">
                    </form>
                </div>
            </div>
            <% } %>
        </div>
    </div>
</div>
</body>
<script>
    // Get the modal
    var modal = document.getElementById("updateModal");

    // Get the button that opens the modal
    var buttons = document.querySelectorAll(".update-button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    buttons.forEach(function(button) {
        button.onclick = function() {
            var filmId = this.getAttribute("data-id");

            document.getElementById("updateId").value = filmId;
            modal.style.display = "block";
        }
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>
</html>

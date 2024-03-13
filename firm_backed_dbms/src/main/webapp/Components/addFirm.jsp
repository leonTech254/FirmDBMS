<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Film</title>

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">

    <style>
        .container {
            margin-top: 50px;
        }
        .container form{
            width: 80%;
            margin: auto;
        }
        .form-group {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<div class="container">
    <h2>Add New Film</h2>
    <form action="firms?action=insert" method="post">
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" class="form-control" id="title" name="title" required>
        </div>
        <div class="form-group">
            <label for="year">Year:</label>
            <input type="number" class="form-control" id="year" name="year" required>
        </div>
        <div class="form-group">
            <label for="director">Director:</label>
            <input type="text" class="form-control" id="director" name="director" required>
        </div>
        <div class="form-group">
            <label for="stars">Stars:</label>
            <input type="text" class="form-control" id="stars" name="stars" required>
        </div>
        <div class="form-group">
            <label for="review">Review:</label>
            <textarea class="form-control" id="review" name="review" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Add Film</button>
    </form>
</div>

<!-- Bootstrap JavaScript (optional, if required) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.7.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>

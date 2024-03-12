<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<style>
    *{
        padding: 0;
        margin: 0;
    }
   .side_bar
   {
       height: 100vh;
       width: 20rem;
       overflow-y: auto;
       background-color: #141d2b;
       position: fixed;
       left: 0;
       top: 0;
   }
   .side_bar_title
   {
       text-align: center;
       color: #141d2b;
       padding-top: 10px;
       width: 80%;
   }
   .side_bar_title:last-child{
       margin: auto;
       display: none;
   }
   .side_bar_title h2{
       /*text-shadow:1px 0.4px 5px red ;*/
       color: #4CAF50;
       font-weight: bolder;
       font-size: small;
   }
   .nav_links_container
   {
       display: flex;
       flex-direction: column;
       /*gap: 2.5rem;*/
       padding: 10px;
   }
   .nav_links_container button
   {
       padding: 10px;
       background: none;
       border: none;
       color: white;
       text-transform: uppercase;
       font-weight: bold;
       border-bottom: 1px solid white;
       cursor: pointer;
       transition: transform .2s ease-in-out;
       padding: 1.2rem;
   }
    .nav_links_container button:active
    {
        transform: scale(.9);
    }
    .nav_links_container a{
        width: 100%;
    }
    .nav_links_container button:hover{
        border-bottom: none;
        transform: translateX(1rem);
        background-color: white;
        color: #141d2b;
        transition: transform .5s ease-in-out;

    }

</style>
<body>
<div class="side_bar">
    <div class="side_bar_title">
        <h2 class="p-3 bg-warning">CRUD OPERATION[Books]</h2>
    </div>
    <div class="nav_links_container">
        <button onclick="getTo('http://localhost:8080/BookServlet')">GET All Data</button>
        <button onclick="getTo('http://localhost:8080/BookServlet?action=filter')">Search data</button>
<%--        <button>Update Data</button>--%>
        <button onclick="getTo('http://localhost:8080/BookServlet?action=new')"> Add Data</button>
        <button onclick="displayMesg('message')">Delete Data</button>
    </div>
    <div class="side_bar_title ml-auto">
        <h2 class="p-3 bg-primary text-light">CRUD OPERATION[Firms]</h2>
    </div>
    <div class="nav_links_container">
        <button onclick="getTo('http://localhost:8080/firms')">GET All Data</button>
        <button onclick="getTo('http://localhost:8080/BookServlet?action=filter')">Search data</button>
        <%--        <button>Update Data</button>--%>
        <button onclick="getTo('http://localhost:8080/BookServlet?action=new')"> Add Data</button>
        <button onclick="displayMesg('message')">Delete Data</button>
    </div>
</div>
<div style="width: 20.2rem;"></div>
</body>
<script>
    function  getTo(path)
    {
        location.href=path;


    }
    function  displayMesg(msg)
    {
        Swal.fire({
            title: 'Delete Operation',
            text: 'To delete a book, go to the Filter tab in the last column, where you will find a deletion button.',
            icon: 'info',
            showCancelButton: true,
        })
    }
</script>
</html>
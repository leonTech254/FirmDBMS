<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
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
   }
   .side_bar_title h2{
       text-shadow:1px 0.4px 5px #fff ;
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
       padding: 1.5rem;
   }
    .nav_links_container button:active
    {
        transform: scale(.9);
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
        <h2>CRUD OPARATION</h2>
    </div>
    <div class="nav_links_container">
        <button>GET All Data</button>
        <button>Search data</button>
        <button>Update Data</button>
        <button>Add Data</button>
        <button>Delete Data</button>
    </div>

</div>
<div style="width: 20.2rem;"></div>
</body>
</html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <title>JSP - Hello World</title>
  <link rel="stylesheet" type="text/css" href="css/landingPg.css">
</head>
<body>

<div class="page_container">
  <div class="side_bar_d">
    <%@ include file="Components/sidebarNav.jsp"%>
  </div>
  <div class="display_container">
    <div class="background">
      <h2>
        <span class="red">C</span>
        <span class="green">R</span>
        <span class="blue">U</span>
        <span class="yellow">D</span>
        <span class="cyan"> </span>
        <span class="purple">database </span>
        <span class="orange">operation</span>
      </h2>
      <p>
        <span class="green">GET</span>,
        <span class="blue">POST</span>,
        <span class="yellow">PUT</span>,
        <span class="red">DELETE</span>
      </p>
    </div>

  </div>
</div>

</body>
</html>
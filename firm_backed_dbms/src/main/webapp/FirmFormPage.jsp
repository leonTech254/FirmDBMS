<%--
  Created by IntelliJ IDEA.
  User: cysecinnovation
  Date: 3/12/24
  Time: 5:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
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
<body>
<div class="page_container">
    <div class="side_bar_d">
        <%@ include file="Components/sidebarNav.jsp"%>
    </div>
    <div class="display_container">
        <%@ include file="Components/addFirm.jsp"%>
    </div>

</body>
</html>

package com.leonteqsecurity.com.firm_backed_dbms.Controllers;

import com.leonteqsecurity.com.firm_backed_dbms.Models.DAO.FilmDAO;
import com.leonteqsecurity.com.firm_backed_dbms.Models.Film;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/firms")
public class FirmServlet extends HttpServlet {
    private FilmDAO firmDAO = new FilmDAO();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if (action == null) {
            action = "firms";
        }

        switch (action) {
            case "firms":
                getAllFirms(request, response);
                break;
            case "new":
                displayNewForm(request,response);
            case "insert":
                insertData(request,response);
        }
    }

    private void insertData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String title = request.getParameter("title");
        int year = Integer.parseInt(request.getParameter("year"));
        String director = request.getParameter("director");
        String stars = request.getParameter("stars");
        String review = request.getParameter("review");


        Film newFilm = new Film();
        newFilm.setTitle(title);
        newFilm.setYear(year);
        newFilm.setDirector(director);
        newFilm.setStars(stars);
        newFilm.setReview(review);
        firmDAO.addFilm(newFilm);
        response.sendRedirect("firms?action=new");
    }

    private void displayNewForm(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("FirmFormPage.jsp").forward(request,response);
    }

    private void getAllFirms(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Film> films = firmDAO.getAllFilms();
        request.setAttribute("films", films);
        request.getRequestDispatcher("firms.jsp").forward(request, response);
    }
}

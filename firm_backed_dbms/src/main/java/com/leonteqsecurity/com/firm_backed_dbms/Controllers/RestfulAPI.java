package com.leonteqsecurity.com.firm_backed_dbms.Controllers;

import com.google.gson.Gson;
import com.leonteqsecurity.com.firm_backed_dbms.Models.DAO.FilmDAO;
import com.leonteqsecurity.com.firm_backed_dbms.Models.Film;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/film_dbms/api/films")
public class RestfulAPI extends HttpServlet {

    private FilmDAO filmDAO = new FilmDAO();
    private Gson gson = new Gson();

    // Add CORS headers to the response
    private void addCorsHeaders(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Max-Age", "3600");
    }
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Add CORS headers to the response
        addCorsHeaders(response);
        response.setStatus(HttpServletResponse.SC_OK);
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Add CORS headers to the response
        addCorsHeaders(response);

        List<Film> filmList = filmDAO.getAllFilms();
        String json = gson.toJson(filmList);
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Add CORS headers to the response
        addCorsHeaders(response);

        BufferedReader reader = request.getReader();
        Film newFilm = gson.fromJson(reader, Film.class);
        filmDAO.addFilm(newFilm);
        response.setStatus(HttpServletResponse.SC_CREATED);
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Add CORS headers to the response
        addCorsHeaders(response);

        BufferedReader reader = request.getReader();
        Film updatedFilm = gson.fromJson(reader, Film.class);
        filmDAO.updateFilm(updatedFilm);
        response.setStatus(HttpServletResponse.SC_OK);
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Add CORS headers to the response
        addCorsHeaders(response);

        String idString = request.getParameter("id");
        if (idString != null) {
            int id = Integer.parseInt(idString);
            filmDAO.deleteFilm(id);
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }
}

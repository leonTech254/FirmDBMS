package com.leonteqsecurity.com.firm_backed_dbms.Controllers;

import com.leonteqsecurity.com.firm_backed_dbms.Models.Book;
import com.leonteqsecurity.com.firm_backed_dbms.Models.DAO.BookDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@WebServlet("/BookServlet")
public class BookServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private BookDAO bookDAO;

    public void init() {
        bookDAO = new BookDAO();
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if (action == null) {
            action = "list";
        }

        switch (action) {
            case "new":
                showNewForm(request, response);
                break;
            case "insert":
                insertBook(request, response);
                break;
            case "delete":
                deleteBook(request, response);
                break;
            case "filter":
                searchBookByNameOrAuthor(request, response);
                break;
            default:
                listBooks(request, response);
                break;

        }
    }

    private void listBooks(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ArrayList<Book> allBooks = bookDAO.getAllBooks();
        request.setAttribute("books", allBooks);
        request.getRequestDispatcher("books.jsp").forward(request, response);
    }

    private void showNewForm(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Forward to JSP to display form for adding new book
        request.getRequestDispatcher("add_book.jsp").forward(request, response);
    }

    private void insertBook(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String title = request.getParameter("title");
        String author = request.getParameter("author");
        String date = request.getParameter("date");
        String genres = request.getParameter("genres");
        String characters = request.getParameter("characters");
        String synopsis = request.getParameter("synopsis");

        // Create a new Book object
        Book newBook = new Book(0, title, author, date, genres, characters, synopsis);


        bookDAO.insertBook(newBook);

        response.sendRedirect("BookServlet");
    }

    private void deleteBook(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Extract book ID from request parameter
        int id = Integer.parseInt(request.getParameter("id"));

        // Delete the book from the database
        bookDAO.deleteBook(id);

        // Redirect to the book list page
        response.sendRedirect("BookServlet");
    }

    public void searchBookByNameOrAuthor(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ArrayList<Book> allBooks = bookDAO.getAllBooks();
        request.setAttribute("books", allBooks);
        request.getRequestDispatcher("SearchBooks.jsp").forward(request, response);
    }


}

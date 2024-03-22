package com.leonteqsecurity.com.firm_backed_dbms.Models.DAO;

import com.leonteqsecurity.com.firm_backed_dbms.Models.Book;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class BookDAO {

    Book oneBook = null;
    Connection conn = null;
    Statement stmt = null;
    String user = "root";
    String password = "";
    // Note none default port used, 6306 not 3306
    String url = "jdbc:mysql://localhost:3306/FirmDB";

    public BookDAO(Connection conn) {
        this.conn = conn;
    }


    private void openConnection(){
        // loading jdbc driver for mysql
        try{
            Class.forName("com.mysql.jdbc.Driver").getDeclaredConstructor().newInstance();
        } catch(Exception e) { System.out.println(e); }

        // connecting to database
        try{
            // connection string for demos database, username demos, password demos
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
        } catch(SQLException se) { System.out.println(se); }
    }
    private void closeConnection(){
        try {
            conn.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    private Book getNextBook(ResultSet rs){
        Book thisBook=null;
        try {

            thisBook = new Book(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getString("author"),
                    rs.getString("date"),
                    rs.getString("genres"),
                    rs.getString("characters"),
                    rs.getString("synopsis"));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return thisBook;
    }



    public ArrayList<Book> getAllBooks(){

        ArrayList<Book> allBooks = new ArrayList<Book>();

        // Open connection
        openConnection();

        // Create select statement and execute it
        try{
            String selectSQL = "select * from books";
            ResultSet rs1 = stmt.executeQuery(selectSQL);

            // Retrieve the results
            while(rs1.next()){
                oneBook = getNextBook(rs1);
                allBooks.add(oneBook);
            }

            rs1.close(); // Close ResultSet
        } catch(SQLException se) {
            System.out.println(se);
        } finally {
            closeConnection(); // Close connection in finally block to ensure it always happens
        }

        return allBooks;
    }


    public Book getBookByID(int id){

        openConnection();
        oneBook=null;
        // Create select statement and execute it
        try{
            String selectSQL = "select * from books where id="+id;
            ResultSet rs1 = stmt.executeQuery(selectSQL);
            // Retrieve the results
            while(rs1.next()){
                oneBook = getNextBook(rs1);
            }

            stmt.close();
            closeConnection();
        } catch(SQLException se) { System.out.println(se); }

        return oneBook;
    }

    public void insertBook(Book newBook) {
        openConnection();
        try {
            String insertSQL = "INSERT INTO books (title, author, date, genres, characters, synopsis) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(insertSQL);
            preparedStatement.setString(1, newBook.getTitle());
            preparedStatement.setString(2, newBook.getAuthor());
            preparedStatement.setString(3, newBook.getDate());
            preparedStatement.setString(4, newBook.getGenres());
            preparedStatement.setString(5, newBook.getCharacters());
            preparedStatement.setString(6, newBook.getSynopsis());

            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
    }

    public void deleteBook(int id) {
        openConnection();
        try {
            String deleteSQL = "DELETE FROM books WHERE id=?";
            PreparedStatement preparedStatement = conn.prepareStatement(deleteSQL);
            preparedStatement.setInt(1, id);

            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
    }
}
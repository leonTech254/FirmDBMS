package com.leonteqsecurity.com.firm_backed_dbms.Models.DAO;

import com.leonteqsecurity.com.firm_backed_dbms.Models.Film;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.*;


public class FilmDAO {

    Film oneFilm = null;
    Connection conn = null;
    Statement stmt = null;
    String user = "root";
    String password = "";
    // Note none default port used, 6306 not 3306
    String url = "jdbc:mysql://localhost:3306/FirmDB";

    public FilmDAO() {}


    private void openConnection(){
        // loading jdbc driver for mysql
        try{
            Class.forName("com.mysql.jdbc.Driver").newInstance();
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

    public void addFilm(Film film) {
        openConnection();
        try {
            String insertSQL = "INSERT INTO films (title, year, director, stars, review) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(insertSQL);
            preparedStatement.setString(1, film.getTitle());
            preparedStatement.setInt(2, film.getYear());
            preparedStatement.setString(3, film.getDirector());
            preparedStatement.setString(4, film.getStars());
            preparedStatement.setString(5, film.getReview());
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException se) {
            System.out.println(se);
        }
        closeConnection();
    }

    public void updateFilm(Film film) {
        openConnection();
        try {
            String updateSQL = "UPDATE films SET title=?, year=?, director=?, stars=?, review=? WHERE id=?";
            PreparedStatement preparedStatement = conn.prepareStatement(updateSQL);
            preparedStatement.setString(1, film.getTitle());
            preparedStatement.setInt(2, film.getYear());
            preparedStatement.setString(3, film.getDirector());
            preparedStatement.setString(4, film.getStars());
            preparedStatement.setString(5, film.getReview());
            preparedStatement.setInt(6, film.getId());
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException se) {
            System.out.println(se);
        }
        closeConnection();
    }

    public void deleteFilm(int id) {
        openConnection();
        try {
            String deleteSQL = "DELETE FROM films WHERE id=?";
            PreparedStatement preparedStatement = conn.prepareStatement(deleteSQL);
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException se) {
            System.out.println(se);
        }
        closeConnection();
    }

    private Film getNextFilm(ResultSet rs){
        Film thisFilm=null;
        try {
            thisFilm = new Film(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getInt("year"),
                    rs.getString("director"),
                    rs.getString("stars"),
                    rs.getString("review"));
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return thisFilm;
    }



    public ArrayList<Film> getAllFilms(){

        ArrayList<Film> allFilms = new ArrayList<Film>();
        openConnection();

        // Create select statement and execute it
        try{
            String selectSQL = "select * from films";
            ResultSet rs1 = stmt.executeQuery(selectSQL);
            // Retrieve the results
            while(rs1.next()){
                oneFilm = getNextFilm(rs1);
                allFilms.add(oneFilm);
            }

            stmt.close();
            closeConnection();
        } catch(SQLException se) { System.out.println(se); }

        return allFilms;
    }

    public Film getFilmByID(int id){

        openConnection();
        oneFilm=null;
        // Create select statement and execute it
        try{
            String selectSQL = "select * from films where id="+id;
            ResultSet rs1 = stmt.executeQuery(selectSQL);
            // Retrieve the results
            while(rs1.next()){
                oneFilm = getNextFilm(rs1);
            }

            stmt.close();
            closeConnection();
        } catch(SQLException se) { System.out.println(se); }

        return oneFilm;
    }

}
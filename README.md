#
# film_dbms Application

Welcome to **film_dbms**, your one-stop solution for managing Novels and Film Management. This application provides CRUD (Create, Read, Update, Delete) operations via both MVC (Model-View-Controller) architecture and RESTful API. With a blend of Java, JSP, Servlet, React, Axios, Fetch, and Gson, film_dbms offers a seamless experience for data management.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on both Novels and Film entities.
- **MVC Architecture**: Utilize the MVC pattern for structured and organized development.
- **RESTful API**: Access data through RESTful endpoints for flexible integration with various platforms.
- **Data Conversion**: Seamlessly convert data between JSON format and Java objects using Gson.
- **Port Configuration**:
  - React Frontend: Running on port 3000.
  - Servlet Backend: Running on port 8080 with Tomcat server.

## Technologies Used

- **Frontend**:
  - React
  - Axios
  - Fetch

- **Backend**:
  - Java Servlet
  - Tomcat Server

- **Data Conversion**:
  - Gson

## Getting Started

To get started with film_dbms, follow these steps:

1. Clone the repository: `git clone https://github.com/leonTech254/FirmDBMS`
2. Navigate to the project directory: `cd FirmDBMS`
3. Start the Servlet backend: Run your Servlet application on a Tomcat server configured to port 8080.
4. Start the React frontend: Navigate to the `frontend` directory and run `npm start` to launch the React application on port 3000.

## Usage

- **MVC**:
  - Access the MVC application through your web browser, navigating to `http://localhost:8080`.
  - Perform CRUD operations on Novels and Films using the provided user interface.

- **RESTful API**:
  - Utilize the RESTful API endpoints for programmatic access to the application's functionalities.
  - Endpoint examples:
    - `GET /film_dbms/api/films` - Retrieve all novels.
    - `POST /film_dbms/api/films` - Create a new novel.
    - `PUT /film_dbms/api/films` - Update an existing novel.
    - `DELETE /film_dbms/api/films:id` - Delete a novel by ID.

## Contributions

Contributions to film_dbms are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.

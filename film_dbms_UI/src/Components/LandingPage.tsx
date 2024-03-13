import React from 'react';
import "../Assets/css/landingpage.css"
import bsImage from "../Assets/images/business.svg"
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
      <body>
        <main>
          <div className="big-wrapper light">
            <img src="../static/img/shape.png" alt="" className="shape" />

            <header>
              <div className="container">
                <div className="logo">
                  <h3>CRUD OPERATION</h3>
                </div>

                <div className="links">
                  <ul>
                    <li>
                        <Link to="/firm" className='btn'>
                        Get started
                        </Link>
                    </li>
                  </ul>
                </div>

                <div className="overlay"></div>

                <div className="hamburger-menu">
                  <div className="bar"></div>
                </div>
              </div>
            </header>

            <div className="showcase-area">
              <div className="container">
                <div className="left">
                  <div className="big-title">
                    <h1>Future is here Implementing </h1>
                    <h1>All HTTP Requests</h1>
                  </div>
                  <p className="text">
                    Your Essential Resource for CRUD Operations with HTTP Methods
                  </p>
                  <div className="cta"></div>
                </div>

                <div className="right">
                  <img src={bsImage} alt="Person Image" className="person" />
                </div>
              </div>
            </div>

            <div className="bottom-area">
              <div className="container">
                <button className="toggle-btn">
                  <i className="far fa-moon"></i>
                  <i className="far fa-sun"></i>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* JavaScript Files */}
        <script src="https://kit.fontawesome.com/a81368914c.js"></script>
        <script src="../static/js/landing.js"></script>
      </body>
  );
};

export default LandingPage;

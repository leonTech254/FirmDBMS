import React from 'react';
import "../Assets/css/landingpage.css"
import bsImage from "../Assets/images/business.svg"

const LandingPage: React.FC = () => {
  return (
      <body>
        <main>
          <div className="big-wrapper light">
            <img src="../static/img/shape.png" alt="" className="shape" />

            <header>
              <div className="container">
                <div className="logo">
                  <h3>CBS</h3>
                </div>

                <div className="links">
                  <ul>
                    <li>
                      <a href="{{url_for('signUp')}}" className="btn">
                        Sign up
                      </a>
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
                    <h1>Future is here,</h1>
                    <h1>Start Exploring now.</h1>
                  </div>
                  <p className="text">
                    Sign up now to enjoy our Contact Management System Today
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

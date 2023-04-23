import React from "react";
import { Link } from "react-router-dom";
import logo from "../trials/pics/LOGO.JPG";
import project from "../trials/pics/My project.png";
import tagline from "../trials/pics/tagline5.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="main-heading">
        <div className="overlay-home">
          <div className="container-home">
            <header className="navbar-home">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="navii">
                <Link to="/signup" className="navlinks">SignUp</Link>
                <Link to="/login" className="active navlinks">
                  Login
                </Link>
              </div>
              <div className="menu">
                <i className="fa fa-bars"></i>
              </div>
            </header>
            <div className="content">
              <div className="mobile">
                <img src={project} alt="" width="470px" />
              </div>
              <div className="content-wrapper">
                <div className="tagline">
                  <img
                    className="imgg"
                    src={tagline}
                    alt="tagline"
                    width="600px"
                    style={{marginLeft:"0px"}}
                  />
                </div>
                <div className="button-wrapper">
                  <div className="button work"><Link to="/aboutus">About Us </Link> </div>
                  <div className="button ask"><Link to="/blog">Blog </Link> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

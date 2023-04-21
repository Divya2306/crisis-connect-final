import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Home.css';
// import Login from "./Login";

const Home = () => {
  return (
    <>
      <section className="main-header">
        <div className="overlay">
          <div className="container">
            <header>
              <div className="logo">
                <img
                  src="https://images.vexels.com/media/users/3/142777/isolated/preview/84711206e52e0d4ff6c793cb476ea264-heartbeat-star-medical-logo-by-vexels.png"
                  alt=""
                />
                <span>CrisisConnect</span>
              </div>
              <div className="nav">
                <a href="">Login</a>
                <a className="active" href="">
                  Sign Up
                </a>
              </div>
              <div className="menu">
                <i className="fa fa-bars"></i>
              </div>
            </header>
            <div className="content">
              <div className="content-wrapper">
                <h2 className="blob">
                  Get Answers to medical questions by medical expert, quickly
                  and free.
                </h2>
                <div className="button-wrapper">
                  <div className="button work">
                    How it works
                    <span>
                      <i className="fa fa-arrow-down"></i>
                    </span>
                  </div>
                  {/* <div className="button ask">Ask Your First Question</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works">
        <div className="container">
          <div className="intro">
            Are you a doctor or a medical expert?
            <span>
              Become an Expert<i className="fa fa-arrow-right"></i>
            </span>
          </div>
          <div className="slug">getting started only takes a minute</div>
          <div className="title">How it does it Work?</div>
          <div className="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam esse
            autem amet, voluptatibus tempora fugiat rem atque vitae deserunt
            ratione. Quisquam animi vel distinctio, natus laboriosam molestias
            reiciendis quidem ullam.
          </div>
          <div className="icon-wrapper">
            <div className="icon">
              <i className="fa fa-heart"></i>
              <p>Create Medical File</p>
            </div>
            <div className="icon">
              <i className="fa fa-question"></i>
              <p>Ask Your Question</p>
            </div>
            <div className="icon">
              <i className="fa fa-comments"></i>
              <p>Talk to an expert</p>
            </div>
            <div className="icon">
              <i className="fa fa-coffee"></i>
              <p>Have a better life</p>
            </div>
          </div>
        </div>
      </section>
      <section id="question">
        <div className="title">Ask your Medical Question</div>
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aut, error provident fugit expedita autem aliquam! Minus, nam! Ut
          porro quae blanditiis hic cumque sit itaque ipsa commodi laboriosam.
          Necessitatibus.
        </div>
        <div className="form">
          <input type="text" placeholder="My Stomach hurts bad" />
          <i className="fa fa-arrow-right"></i>
        </div>
      </section>
      <section id="talk">
        <div className="col-wrapper">
          <div className="col-50">
            <div className="title">Talk to an Expert</div>
            <div className="content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              optio odio, laudantium a omnis animi aliquid nemo laboriosam ab,
              reiciendis debitis vitae sequi distinctio dolore quisquam nesciunt
              sunt pariatur id?
            </div>
            <div className="options">
              <ul>
                <li>
                  {" "}
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                  Chat with an expert
                </li>
                <li>
                  {" "}
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                  Send photos with your question
                </li>
              </ul>
            </div>
          </div>
          <div className="col-50"></div>
        </div>
      </section>
      <section id="signup">
        <div className="slug">Seen enough and reay to get started</div>
        <div className="title">Talk to a medical expert right now!</div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime
          quasi earum magnam consequuntur sapiente harum, quia itaque at labore.
          Laudantium, minus assumenda eligendi rerum quaerat nemo ipsam voluptas
          eum.
        </div>
        <div className="button-wrapper">
          <button className="highlight">Signup Now</button>
          <button>Contact Us</button>
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <div className="col-wrapper">
            <div className="col-1">
              <div className="logo">
                <img
                  src="https://images.vexels.com/media/users/3/142777/isolated/preview/84711206e52e0d4ff6c793cb476ea264-heartbeat-star-medical-logo-by-vexels.png"
                  alt=""
                />
                <span>Sansa</span>
              </div>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <a className="header" href="">
                    More info
                  </a>
                </li>
                <li>
                  <a href="">About Sansa</a>
                </li>
                <li>
                  <a href="">Terms and Condition</a>
                </li>
                <li>
                  <a href="">Frequently asked Questions</a>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <a className="header" href="">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="">kofiarhin@gmail.com</a>
                </li>
                <li>
                  <a href="">checkout projects</a>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <a className="header" href="">
                    Medical Advisor
                  </a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Become one</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="social-media">
        <div className="container">
          <div className="social-wrapper">
            <div className="copyright">Copyright &copy; 2016f</div>
            <div className="icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
            </div>
            <div className="slug">
              <span>Made with Love By</span>
              <img
                src="https://images.vexels.com/media/users/3/142777/isolated/preview/84711206e52e0d4ff6c793cb476ea264-heartbeat-star-medical-logo-by-vexels.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

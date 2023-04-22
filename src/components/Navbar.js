import React from "react";
import logo from "../LOGO.JPG";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title"><span class="crisis"><b>CrisisConnect</b></span></div>

        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
  
        <div class="nav-links">
          <a href="#" target="_blank">
            <b>Home</b>
          </a>
          <a href="#" target="_blank">
            <b>About</b>
          </a>
          <a href="#" target="_blank">
            <b>Blog</b>
          </a>
          <a href="#" target="_blank">
          <b>First Aid</b>
          </a>
          <a href="#" target="_blank">
          <b>Contact Us</b>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
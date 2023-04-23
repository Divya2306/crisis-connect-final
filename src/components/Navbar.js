import React from "react";
import { Link } from "react-router-dom";
// import logo from "../trials/picsLOGO.JPG";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="navi">
        <input type="checkbox" id="navi-check" />
        <div class="navi-header">
          <div class="navi-title"><span class="crisis"><b>CrisisConnect</b></span></div>

        </div>
        <div class="navi-btn">
          <label for="navi-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
  
        <div class="navi-links">
          <Link to="/mainpage">
            <b>Home</b>
          </Link>
          <Link to="/aboutus">
            <b>About</b>
          </Link>
          <Link to="/blog">
            <b>Blog</b>
          </Link>
          <Link to="/">
          <b>First Aid</b>
          </Link>
          <Link to="/">
          <b>Contact Us</b>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

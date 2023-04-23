import React from "react";
import Navbar from "./Navbar";
import Sos from "./Sos";
import Categories from "./Categories";
import Footer from "./footer";
import "./Mainpage.css";

const Mainpage=()=>{
    return(
        <>
        <div className="main-page-container">
        <Navbar/>
        <Sos/>
        <Categories/>
        <div className="footer-section">
        <Footer/>
        </div>
        </div>
        </>
    );
}

export default Mainpage;
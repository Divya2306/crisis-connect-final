import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
<header>
    <div class="logo"><a href=""><strong>LogoOfBrand</strong></a></div>
        <div class="burger "><i class="ri-menu-line icon"></i></div>
        <nav class="navbar">
            <ul class="icons">
                <a href="">
                    <li><i class="ri-account-circle-line icon" title="Account"></i></li>
                </a>
                <a href="">
                    <li><i class="ri-shopping-basket-line icon" title="Shopping"></i></li>
                </a>
            </ul>
            <ul class="links">
                <a href="">
                    <li>About</li>
                </a>
                <a href="">
                    <li>Product</li>
                </a>
                <a href="">
                    <li>Service</li>
                </a>
                <a href="">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    </header>

    );
  };
  

export default Navbar;
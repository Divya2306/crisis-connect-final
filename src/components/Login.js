import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup";

const Login = () => {
  return (
    <>
      <div class="containerlogin">
        <div class="login_box">
          <h1>Login</h1>
          <div class="input_box">
            <input type="text" required="" />
            <label for="">Email</label>
            <ion-icon class="icon " name="mail-outline"></ion-icon>
          </div>
          <div class="input_box">
            <input type="password" required="" />
            <label for="">Password</label>
            <ion-icon class="icon" name="lock-closed-outline"></ion-icon>
          </div>
          <div className="rem">
            <input id="chack" type="checkbox" />
            <label for="chack">Remember me</label>
            <a href="#">Forget Password</a>
          </div>
          <div class="login">
            <button><Link to="/mainpage" className="loginlink">Log in </Link></button>   
            {/* to be editted */}
          </div>
          <div>
            <div class="reg">
              <p>Don't have a account? </p>
              <Link to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Login;

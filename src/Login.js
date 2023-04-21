import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div class="container">
        <div class="login_box">
          <h1>Login</h1>
          <div class="input_box">
            <input type="text" required="" />
            <label for="">Email</label>
            <ion-icon class="icon " name="mail-outline"></ion-icon>
          </div>
          <div class="input_box">
            <input type="password" required="" />
            <label for="">password</label>
            <ion-icon class="icon" name="lock-closed-outline"></ion-icon>
          </div>
          <div className="rem">
            <input id="chack" type="checkbox" />
            <label for="chack">Remember me</label>
            <a href="#">Forget Password</a>
          </div>
          <div class="login">
            <button>Log in </button>
          </div>
          <div>
            <div class="reg">
              <p>Don't have a account </p>
              <a exact href="#">
                Sign Up
              </a>
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

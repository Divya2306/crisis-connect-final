import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <>
<div class="container-signup">
	<div class="login_box">
		<h1>Sign Up</h1>
        <div class="input_box">
			<input id="name" type="text" required=""/>
			<label for="">Name</label>
			
		</div>
		<div class="input_box">
			<input id="email" type="text" required=""/>
			<label for="">Email</label>
			
		</div>
        <div class="input_box">
			<input id="age" type="text" required=""/>
			<label for="">Age</label>
			
		</div>
        <div class="input_box">
			<input id="gender" type="text" required=""/>
			<label for="">Gender</label>
			
		</div>
        <div class="input_box">
			<input id="mobilenum" type="text" required=""/>
			<label for="">Mobile Number</label>
			
		</div>
    <div class="input_box">
			<input id="address" type="text" required=""/>
			<label for="">Address</label>
			
		</div>
        <div class="input_box">
			<input id="mobilenum2" type="text" required=""/>
			<label for="">Relative's Mobile Number</label>
			
		</div>
		<div class="input_box">
			<input id="password" type="password" required=""/>
			<label for="">Password</label>
		</div>
		<div class="rem">
			<input id="chack" type="checkbox"/>
			<a href="#">Remember Me</a>
		</div>
		<div class="login">
			<button><Link to="/login" className="signuplink">Sign Up</Link></button>
		</div>
		<div>
			<div class="reg">
				<p>Already Have an Account </p>
				<a href="/login">Log In</a>
			</div>
		</div>
	</div>
 </div>
 

	






	{/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
    </>
  );
};

export default Signup;
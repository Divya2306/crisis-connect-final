import React from "react";
import Signupjs from  "./Signupjs";
import "./Signup.css";

const Signup = () => {
  return (
    <>
    <Signupjs/>
      <form className="container">
        <h2 className="heading">Sign Up</h2>
        <div className="steps-container">
          <hr />
          <hr className="active" />
          <div className="steps">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="steps">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="steps">
            <i className="fa-solid fa-key"></i>
          </div>
          <div className="steps">
            <i className="fa-solid fa-trophy"></i>
          </div>
        </div>

        <div className="input-slide-contianer">
          <scroller>
            <div className="input-slide">
              <h3>User Name</h3>
              <p>
                <i>Username is your online identity</i>
              </p>
              <ul className="rules">
                <li>
                  Your username should only contain letters, numbers,
                  underscores or hyphens.
                </li>
                <li>No spaces or special characters allowed.</li>
                <li>
                  Your username should not be offensive or contain profanity.
                </li>
              </ul>
              <input
                type="text"
                placeholder="Type your username Here"
                name="username"
                className="username"
              />
              <div className="full-name">
                <input type="text" placeholder="First Name" name="firstname" />
                <input
                  type="text"
                  name="lastname"
                  className="lastname"
                  placeholder="Last Name"
                />
              </div>
              <button className="button-nex" onclick="NextSlide(1,event)">
                Next
              </button>
            </div>
            <div className="input-slide user-detail">
              <h3>Email</h3>
              <p>
                <i>Email is the gateway to your digital life</i>
              </p>
              <ul className="rules">
                <li>
                  Please enter valid email in the format "example@example.com".
                </li>
                <li>
                  we value your privacy and will never use your email for any
                  unauthorized purposes.
                </li>
                <li>Please don't use email that belong to someone else.</li>
                <li>
                  Please don't use email that includes personal information.
                </li>
              </ul>
              <input
                type="email"
                name="email"
                className="email"
                placeholder="Email"
              />

              <button className="button-nex" onclick="NextSlide(2,event)">
                Next
              </button>
            </div>
            <div className="input-slide password-slide">
              <h3>Password</h3>
              <p>
                <i>Secure your account with a strong password</i>
              </p>
              <ul className="rules">
                <li>
                  Include a mix of uppercase and lowercase letters, numbers, and
                  special characters.
                </li>
                <li>Avoid using common or easily guessable passwords.</li>
                <li>Do not use personal information.</li>
              </ul>
              <input
                type="password"
                name="password"
                className="password"
                placeholder="Password"
              />
              <input
                type="password"
                name="confirm-password"
                className="confirm-password"
                placeholder="Confirm Your Password"
              />
              <button className="button-nex" onclick="NextSlide(3,event)">
                Next
              </button>
            </div>
            <div className="input-slide finish-slide">
              <h3>Congratulations!</h3>
              <p>
                <i>
                  You have completed all the steps required for registration.
                </i>
              </p>
              <ul className="rules">
                <li>
                  Before submitting your information, please take a moment to
                  ensure that all the details provided are correct.{" "}
                </li>
                <li>
                  {" "}
                  We take the privacy and security of our users very seriously,
                  and it is important that all the information provided is
                  accurate and up-to-date.
                </li>
                <li>
                  Once you have confirmed that everything is in order, simply
                  click the 'Submit' button.
                </li>
              </ul>

              <button type="submit" className="button-nex" disabled>
                Sumbit
              </button>
            </div>
          </scroller>
        </div>
        <button className="GoBack" onclick="GoBack()">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </form>
    </>
  );
};

export default Signup;

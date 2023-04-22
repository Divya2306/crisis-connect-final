import React from "react";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <>
    <Navbar/>
      <section id="how-it-works">
          <div className="title-about">ABOUT US</div>
          <div className="content-about">
            Looking for a lifeline during tough times? Look no further than{" "}
            <b>Crisis Connect</b>. Our emergency helpline website offers a
            one-stop-shop for support and assistance. Think of us as your
            digital superhero cape - ready to swoop in and help when you need it
            most.
            <br />
            <br />
            At <b>Crisis Connect</b>, we're committed to being there for you
            when it matters most, with round-the-clock support and a team of
            highly trained professionals ready to provide guidance and
            assistance. When the unexpected strikes, trust Crisis Connect to
            help you navigate through the chaos and emerge safely on the other
            side.
            <br />
            <br /> <b>SOS Button</b> <br />
            Our emergency helpline website provides immediate assistance at the
            touch of a button. With our SOS feature, you can quickly and easily
            select the type of emergency service required. Clicking the SOS
            button will automatically send your live location with the help of
            state-of-the-art location technology. Help will be on its way before
            you even finish describing the situation.
          </div>

          <div className="icon-wrapper-about">
            <div className="icon-about">
              <i className="fa fa-heart"></i>
              <p>Medical Assistance</p>
            </div>
            <div className="icon-about">
              <i className="fa fa-question"></i>
              <p>Fire Assistance</p>
            </div>
            <div className="icon-about">
              <i className="fa fa-comments"></i>
              <p>Women's Safety</p>
            </div>
            <div className="icon-about">
              <i className="fa fa-coffee"></i>
              <p>Police</p>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;

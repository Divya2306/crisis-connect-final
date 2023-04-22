import React from "react";
import Navbar from "./Navbar";
import "./Blog.css";

const Blog=()=>{
    return(
        <>
        <Navbar/>
        <main>
        <h3>BLOGS</h3>
  <div className="row-blog">
  <div className="example-1 card">
    <div className="wrapper">
      <div className="date">
        <span className="day">12</span>
        <span className="month">Aug</span>
        <span className="year">2022</span>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Jane Doe</span>
          <h1 className="title"><a href="#">A Stroke is a medical emergency. Seek help immediately.

          </a></h1>

          
          <p className="text">Doctors only have 3-4.5 hours to initiate life-saving treatment from the onset of a stroke. Earlier the Better!!

          </p>
          <label for="show-menu" className="menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul className="menu-content">
          <li>
            <a href="#" className="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
          <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="example-2 card">
    <div className="wrapper">
      <div className="header">
        <div className="date">
          <span className="day">15</span>
          <span className="month">Dec</span>
          <span className="year">2023</span>
        </div>
        <ul className="menu-content">
          <li>
            <a href="#" className="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Sanjana Tyagi</span>
          <h1 className="title"><a href="#">What is an Emergency Call Button? Is It Easy to Use?</a></h1>
          <p className="text">The emergency call button is a function of an electronic device or app that sends an emergency SOS signal to different contacts to receive help.</p>
          <a href="#" className="button">Read more</a>
        </div>
      </div>
    </div>
  </div>
  <div className="example-3 card">
    <div className="wrapper">
      <div className="date">
        <span className="day">03</span>
        <span className="month">March</span>
        <span className="year">2023</span>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Mark Braxter</span>
          <h1 className="title"><a href="#">When Illness Is a Stepping Stone Towards Positive Experiences</a></h1>
          <p className="text">Support from family, friends and counsellors convinced Kurtle that suicide wasn’t the answer and set her on the life-long path to recovery from depression and psychosis.</p>
          <label for="show-menu" className="menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul className="menu-content">
          <li>
            <a href="#" className="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
          <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</main>
        </>
    );
}

export default Blog;
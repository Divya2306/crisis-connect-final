import React from "react";
import ambulance from "../images/ambulance.png";
import fire from "../images/fire.png";
import police from "../images/police.png";
import women from "../images/woman.png";
import "./Emergencies.css";

const Emergencies = () => {
  return (
    <>
    <div className="container-emergency">
      <div className="cardd">
        <div className="item item--1">
        <img src={ambulance} alt="" srcset="" />
          <span className="text text--1"> Ambulance </span>
          {/* <span>102</span> */}
        </div>
        <div className="item item--2">
        <img src={fire} alt="" srcset="" />
          <span className="text text--2">Fire </span>
          {/* <span>101</span> */}
        </div>
        <div className="item item--3">
        <img src={police} alt="" srcset="" />
          <span className="text text--3"> Police </span>
          {/* <span>100</span> */}
        </div>
        <div className="item item--4">
        <img src={women} alt="" srcset="" />
          <span className="text text--4"> Women Helpline </span>
          {/* <span>1091</span> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Emergencies;

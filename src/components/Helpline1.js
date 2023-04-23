import React from "react";
import Navbar from "./Navbar";
import "./Helpline1.css";

const Helpline1=()=>{
    return(
        <>
        <div className="helpline">
        <Navbar/>
        <h3>Helpline</h3>
        <div class="container-helpline">
      <div class="flex"><h1>DELHI  </h1>
      <img class="img" src="..trials/pics/pngtree-phone-icon-with-square-black-frame-png-image_5578524.png" width="50px" alt=""/>
    </div>
      <br/>
      <p><b>
        CENTRALIZED HELPLINE NUMBER : 112 
        <br/><br/>
        DELHI COVID HELPLINE : 1031 OR 011-22307145 

        <br/><br/>
        Police: 112 OR 100

        <br/><br/>
        Fire : 101 
        <br/><br/>
        Ambulance :102 
        <br/><br/>
        Women helpline : 1091 </b></p>
    </div>
    </div>
        </>
    );
}

export default Helpline1;
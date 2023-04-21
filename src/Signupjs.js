import React from 'react'
import { useState } from 'react';

function Signupjs(SlideNo) {
  let [GlobalSlideNo, setGlobalSlideNo] = useState(SlideNo);
  let IndicatorObj = {
    startVal: 0,
    EndVal: 25,
    currentWidth: 0
  };

  function NextSlide(SlideNo, event) {
    setGlobalSlideNo(SlideNo);
    event.preventDefault();
    if (SlideNo == 1) {
      document.querySelector(".GoBack").style.animation =
        "GoBackBtnVisible 0.25s ease";
      document.querySelector(".GoBack").onanimationend = function () {
        this.style.animation = "";
        this.style.left = "10px";
      };
    }
  }
  function MoveIndicationBar(i) {
    var step = document.querySelectorAll(".steps")[i - 1];
    IndicatorObj.StepNo = i;
    console.log(step);
    IndicatorObj.EndVal = i * 25;
    ZerotoHeroWidth();
  }
  function ZerotoHeroWidth() {
    var bar = document.querySelector(".active");
    var step = document.querySelectorAll(".steps")[IndicatorObj.StepNo - 1];
    let barStyle = parseInt(window.getComputedStyle(bar).width);
    if (IndicatorObj.currentWidth > IndicatorObj.EndVal / 2) {
      step.classList.add("PassedStep");
    }
    if (IndicatorObj.currentWidth < IndicatorObj.EndVal) {
      IndicatorObj.currentWidth += 1;
      bar.style.width = IndicatorObj.currentWidth + "%";
      window.requestAnimationFrame(ZerotoHeroWidth);
    }
  }
  function GoBack(event) {
    event.preventDefault();
    console.log(GlobalSlideNo);
    if (GlobalSlideNo < 2) {
      document.querySelector(".GoBack").style.animation =
        "GoBackBtnInvisible 0.25s ease";
      document.querySelector(".GoBack").onanimationend = function () {
        this.style.animation = "";
        this.style.left = "-50px";
      };
    }
    setGlobalSlideNo(GlobalSlideNo-1);
    console.log(
      parseInt(
        window
          .getComputedStyle(document.querySelector("scroller"))
          .getPropertyValue("margin-left")
      ) + 478
    );
    document.querySelector("scroller").style.marginLeft =
      parseInt(
        window
          .getComputedStyle(document.querySelector("scroller"))
          .getPropertyValue("margin-left")
      ) +
      478 +
      "px";
    document.querySelector(".GoBack").onclick = function () {
      event.preventDefault();
    };
    setTimeout(function () {
      document.querySelector(".GoBack").onclick = GoBack;
    }, 500);
    MoveIndicationBarMinus(GlobalSlideNo);
  }

  IndicatorObj = {
    startVal: 25,
    EndVal: 0,
    currentWidth: 0
  };
  function MoveIndicationBarMinus(i) {
    IndicatorObj.StepNo = i;

    IndicatorObj.EndVal = i * 25;
    HerotoZeroWidth();
    console.log(IndicatorObj);
  }
  function HerotoZeroWidth() {
    var bar = document.querySelector(".active");
    var step = document.querySelectorAll(".steps")[IndicatorObj.StepNo - 1];
    let barStyle = parseInt(window.getComputedStyle(bar).width);
    if (IndicatorObj.currentWidth > IndicatorObj.EndVal) {
      IndicatorObj.currentWidth -= 1;
      bar.style.width = IndicatorObj.currentWidth + "%";
      window.requestAnimationFrame(HerotoZeroWidth);
    }
  }

  return (
    <div>
      {console.log(
      parseInt(
      window
      .getComputedStyle(document.querySelector("scroller"))
      .getPropertyValue("margin-left")
      ) - 478
      )};
      {document.querySelector("scroller").style.marginLeft =
      parseInt(
      window
      .getComputedStyle(document.querySelector("scroller"))
      .getPropertyValue("margin-left")
      ) -
      478 +
      "px"};
      {MoveIndicationBar(SlideNo)};
      

    </div>
  )
}

export default Signupjs

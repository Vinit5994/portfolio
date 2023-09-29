import React from "react";
// import { useEffect } from "react";
import "./about.css";
import "./journey.css";
// import $ from "jquery";
const Journey = () => {
  // function i_smoke(classname) {
  //   document.querySelectorAll(classname).forEach((e) => {
  //     e.addEventListener("mouseover", () => {
  //       e.classList.add("active");
  //     });
  //   });
  // }

  // function text_smoke(classname) {
  //   $(classname).html(
  //     "<span>" +
  //       $(classname).text().replace(/\s/g, "</span> <span>") +
  //       "</span>"
  //   );
  //   const textarr = $(classname + " span");
  //   for (let i = 0; i < textarr.length; i++) {
  //     textarr[i].innerHTML = textarr[i].textContent.replace(
  //       /\S/g,
  //       "<span>$&</span>"
  //     );
  //   }
  //   const letters = $(classname + " span span");
  //   for (let i = 0; i < letters.length; i++) {
  //     letters[i].addEventListener("mouseover", function () {
  //       letters[i].classList.add("j-active");
  //     });
  //   }
  // }
  // const observer = new IntersectionObserver((entries) => {
  //   // console.log(entries);
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       document
  //         .querySelectorAll(".year i")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".location i")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".year span span span")
  //         .forEach((e) => e.classList.remove("j-active"));
  //       document
  //         .querySelectorAll(".description span span span")
  //         .forEach((e) => e.classList.remove("j-active"));
  //       document
  //         .querySelectorAll(".location span span span")
  //         .forEach((e) => e.classList.remove("j-active"));
  //     }
  //   });
  // });

  // useEffect(() => {
  //   i_smoke(".year i");
  //   i_smoke(".location i");
  //   text_smoke(".d1 span");
  //   text_smoke(".d2 span");
  //   text_smoke(".d3 span");
  //   text_smoke(".y1 span");
  //   text_smoke(".y2 span");
  //   text_smoke(".y3 span");
  //   text_smoke(".l1 span");
  //   text_smoke(".l2 span");
  //   text_smoke(".l3 span");
  //   observer.observe(document.querySelector(".journey"));
  // }, []);

  return (
    <div className="journey">
      <div className="title">
        <div className="about-text">
          <span>journey</span>
        </div>
        <div className="line"></div>
      </div>
      <div className="outer-box">
        <div className="inner-box left" data-aos="fade-up">
          <div className="box">
            <div className="year y1">
              <i className="fa-solid fa-calendar-days"></i>
              <span>2018</span>
            </div>
            <div className="description d1">
              <span>Completed secondry school.</span>
            </div>
            <div className="location l1">
              <i className="fa-solid fa-location-dot"></i>
              <span>Bhavan's shri A. K. doshi vidhyalaya , Jamnagar.</span>
            </div>
          </div>
        </div>
        <div
          className="inner-box center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="box">
            <div className="year y2">
              <i className="fa-solid fa-calendar-days"></i>
              <span>2020</span>
            </div>
            <div className="description d2">
              <span>
                Completed higher secondry school in science.
              </span>
            </div>
            <div className="location l2">
              <i className="fa-solid fa-location-dot"></i>
              <span>Prime School , Jamnagar.</span>
            </div>
          </div>
        </div>
        <div
          className="inner-box right"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="box">
            <div className="year y3">
              <i className="fa-solid fa-calendar-days"></i>
              <span>Present</span>
            </div>
            <div className="description d3">
              <span>Bechlor of Engineering in Information Technology.</span>
            </div>
            <div className="location l3">
              <i className="fa-solid fa-location-dot"></i>
              <span>LDCE, Ahmedabad.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

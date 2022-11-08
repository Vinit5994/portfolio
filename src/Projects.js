import React from "react";
import "./projects.css";
import { useEffect } from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import lottie from "lottie-web";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
// import required modules
import swipe from "../src/lotties/swipe.json";
import { EffectCoverflow, Pagination, EffectCube } from "swiper";
import Slide from "./Slide";
const Projects = () => {
  useEffect(() => {
    const lottieAnimation = lottie.loadAnimation({
      container: document.querySelector(".swipe-left"),
      animationData: swipe,
      renderer: "svg",
      autoplay: true,
      loop: true,
    });
    const lottieAnimation2 = lottie.loadAnimation({
      container: document.querySelector(".swipe-right"),
      animationData: swipe,
      renderer: "svg",
      autoplay: true,
      loop: true,
    });
  }, []);

  return (
    <div
      id="projects"
      data-aos="fade-in"
      data-aos-delay="400"
      className="section"
    >
      <div className="title">
        <div className="about-text">
          <span>Projects</span>
        </div>
        <div className="line"></div>
      </div>
      <div className="swipe-info">
        <div className="swipe-left"></div>
        <div className="swipe-text">
          <h2>swipe</h2>
        </div>
        <div className="swipe-right"></div>
      </div>
      <Slide />
    </div>
  );
};

export default Projects;

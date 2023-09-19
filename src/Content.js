// import React, { useEffect, useState } from "react";
import "./content.css";
// import { useState } from "react";
// import Lottie from "react-lottie";
import lottie from "lottie-web";
import animateData from "./lotties/dev.json";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
// import Typical from "react-typical";
import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

import swipe from "../src/lotties/swipe.json";
// import { useState } from "react";
const Content = () => {
  // function smoke(classname) {
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
  //       letters[i].classList.add("c-active");
  //     });
  //   }
  //   // console.log(letters);
  //   // console.log(textarr[0].innerHTML);
  // }
  // useEffect(() => {
  // smoke(".sm-txt span");
  // }, []);

  // const [isStart, setIsStart] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // setIsStart(true);
  //     document.querySelector("#my-anim").currentTime = 0;
  //   }, 1200);
  // }, []);
  // const [replay, setReplay] = useState(true);
  const MainText = [
    {
      type: "span",
      text: "More about me",
    },
  ];
  // const placeholderText = [{ type: "span", text: "More about me" }];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  let index = 0;

  const animateText = () => {
    const txts = document.querySelector(".animate-text").children;
    const len = txts.length;
    for (let i = 0; i < len; i++) {
      txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");
    setTimeout(() => {
      txts[index].classList.add("text-out");
    }, 2800);
    setTimeout(() => {
      if (index === len - 1) {
        index = 0;
      } else {
        index++;
      }
      animateText();
      // setTimeout(animateText, 2000);
    }, 3000);
    // console.log(anima)
  };
  useEffect(() => {
    // Gifobserver.observe(document.querySelector("#my-anim"));
    animateText();
    // imgObserver.observe(document.querySelector(".img-div"));
    // console.log(txts[index]);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  // const textObserver = new IntersectionObserver((entries) => {
  //   // console.log(entries);
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       // console.log(document.querySelectorAll(".sm-txt span span span"));
  //       document
  //         .querySelectorAll(".sm-txt span span span")
  //         .forEach((e) => e.classList.remove("c-active"));
  //       // .classList.remove("active");
  //       // $(".sm-txt span span span span");
  //     }
  //   });
  // });

  useEffect(() => {
    // textObserver.observe(document.querySelector(".sm-txt"));
  }, []);

  useEffect(() => {
    const lottieAnimation = lottie.loadAnimation({
      container: document.querySelector(".lottie"),
      animationData: animateData,
      renderer: "svg",
      autoplay: true,
      loop: false,
    });
    setTimeout(() => {
      lottieAnimation.playSegments([0, 220], true);
    }, 1000);
    const lottieObserver = new IntersectionObserver((entries) => {
      // console.log(entries);
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          lottieAnimation.playSegments([0, 220], true);
          return;
        }
      });
    });
    lottieObserver.observe(document.querySelector(".lottie"));
  }, []);

  useEffect(() => {
    const lottieAnimation = lottie.loadAnimation({
      container: document.querySelector(".swipe-down"),
      animationData: swipe,
      renderer: "svg",
      autoplay: true,
      loop: true,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="content section"
      id="content"
    >
      <div className="intro">
        <div className="text">
          {/* <My />
          <div></div> */}
          <span className="outer">
            <span>I'm </span>
            {/* <h1 className="animated"> */}
            {/* <Typical
              loop={Infinity}
              className="animated"
              wrapper="b"
              steps={[
                "Rushil. ",
                1000,
                "Developer. ",
                1000,
                "Designer. ",
                1000,
                "Programmer. ",
                1000,
              ]}
            /> */}
            {/* <motion.span
              initial="hidden"
              animate={"visible"}
              variants={container}
            >
              <span>
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </span>
            </motion.span>
            <motion.span
              initial="hidden"
              animate={replay ? "visible" : "hidden"}
              variants={container}
            >
              <span>
                {MainText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </span>
            </motion.span> */}
            &nbsp;
            <span className="animate-text">
              <span>Rushil.</span>
              <span>Developer.</span>
              <span>Designer.</span>
              <span>Programmer.</span>
            </span>
            {/* </h1> */}
          </span>
          <div data-aos="fade-up" data-aos-delay="400" className="sm-txt">
            <span>
              I'm a full-stack web developer and mobile application developer
              with a great passion.
            </span>
          </div>
          <div className="last-txt">
            {/* <span>More about me</span>{" "} */}
            <motion.span
              initial="hidden"
              animate={"visible"}
              variants={container}
            >
              <a href="#about">
                <span>
                  {MainText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                  })}
                </span>
              </a>
            </motion.span>
            <span>
              {" "}
              <i
                style={{
                  transform: "rotate(140deg)",
                  paddingRight: "5px",
                  paddingLeft: "8px",
                }}
                className="fa-solid fa-arrow-up-long"
              ></i>
            </span>
          </div>
        </div>
        {/* <div></div> */}
      </div>
      <div
        className="my"
        data-aos="fade-in"
        data-aos-delay="1000"
        data-aos-duration="1500"
      >
        {/* <video id="my-anim" autoPlay={true} muted={true} loop>
          <source src="images/dev.mp4" type="video/mp4" />
        </video> */}
        <div className="lottie">
          {/* <Lottie
            options={defaultOptions}
            width={"120%"}
            height={"100%"}
            isClickToPauseDisabled={false}
          /> */}
        </div>
        {/* <img src="images/new.gif" alt="" /> */}
      </div>

      {/* <script>{gsap.from()}</script> */}
      <div className="swipe-down"></div>
    </motion.div>
  );
};

export default Content;

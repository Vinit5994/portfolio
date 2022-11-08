import React from "react";
import { useEffect } from "react";
import "./about.css";
import Journey from "./Journey";
import "./App.css";
import $ from "jquery";
import { motion } from "framer-motion";
const About = () => {
  // const textObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       document
  //         .querySelectorAll(".first span span span")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".second span span span")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".third span span span")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".fourth span span span")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".skill-text span span span")
  //         .forEach((e) => e.classList.remove("active"));
  //       document
  //         .querySelectorAll(".skills-icon img")
  //         .forEach((e) => e.classList.remove("img-active"));
  //     }
  //   });
  // });
  const imgObserver = new IntersectionObserver(
    (entries) => {
      // console.log(entries);
      entries.forEach((entry) => {
        entry.target.classList.toggle("img-transition", entry.isIntersecting);
        setTimeout(() => {
          entry.target.classList.toggle("reverse", entry.isIntersecting);
        }, 700);
        // 
      });
    }
    // {
    //   threshold: 1,
    // }
  );
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
  //   const letters = document.querySelectorAll(classname + " span span");
  //   for (let i = 0; i < letters.length; i++) {
  //     letters[i].addEventListener("mouseover", function () {
  //       letters[i].classList.add("active");
  //     });
  //   }
  //   // console.log(letters);
  //   // console.log(text);
  // }
  // function imgSmoke() {
  //   const imgs = document.querySelectorAll(".skills-icon img");
  //   for (let i = 0; i < imgs.length; i++) {
  //     // console.log(imgs[i]);
  //     imgs[i].addEventListener("mouseover", function () {
  //       imgs[i].classList.add("img-active");
  //     });
  //     // imgs[i].classList.add("active");
  //   }
  //   // console.log(imgs);
  // }
  useEffect(() => {
    imgObserver.observe(document.querySelector(".animate"));
    // textObserver.observe(document.querySelector(".about-info"));
    // smoke(".first span");
    // smoke(".second span");
    // smoke(".third span");
    // smoke(".fourth span");
    // smoke(".skill-text span");
    // imgSmoke();
  }, []);

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      id="about"
    >
      <div className="title">
        <div className="about-text">
          <span>About</span>
        </div>
        <div className="line"></div>
      </div>
      <div className="about-content">
        <div className="about-info">
          <div className="first" data-aos="fade-up">
            <span>who am i</span>
          </div>
          <div className="second" data-aos="fade-up" data-aos-delay="100">
            <span>
              My name is Rushil Makvana. I live in Gujarat, India. I'm a full
              stack developer and mobile application developer. I am pursuing
              Bachelor of engineering degree in Information Technology at LDCE,
              Ahmedabad.
            </span>
          </div>

          <div className="third" data-aos="fade-up" data-aos-delay="200">
            <span>
              I enjoy the constant change in the technologies used in the area
              and love to learn new thechnologies.
            </span>
          </div>
          <div className="fourth" data-aos="fade-up" data-aos-delay="300">
            <span>
              I like to design and develop websites and mobile app to solve
              user-problems and also like to use new tools.
            </span>
          </div>
          <div className="skills">
            <div className="skill-text" data-aos="fade-up">
              <span>tech | enjoy</span>
            </div>
            <div
              className="skills-icon"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="images/react.png" alt="react" />
              <img src="images/node.svg" alt="node" />
              <img src="images/flutter.png" alt="flutter" />
              <img src="images/html.png" alt="html" />
              <img src="images/css.png" alt="css" />
              <img src="images/js.png" alt="js" />
              <img src="images/java.png" alt="java" />
              <img src="images/python.png" alt="python" />
              <img src="images/php.png" alt="php" />
              <img src="images/firebase.png" alt="firebase" />
              <img src="images/dart.png" alt="dart" />
              <img src="images/sql.png" alt="sql" />
              <img src="images/jquery.png" alt="jquery" />
            </div>
          </div>
          {/* <div className="journey">
            <div className="j-text">
              <span>journey</span>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="year">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>2018</span>
                </div>
                <div className="description">
                  <span>Completed secondry school.</span>
                </div>
                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>SVB, Surat</span>
                </div>
              </div>
              <div className="box">
                <div className="year">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>2021</span>
                </div>
                <div className="description">
                  <span>
                    Completed Diploma engineering in Information Technology
                  </span>
                </div>
                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>SSGCET, Surat.</span>
                </div>
              </div>
              <div className="box">
                <div className="year">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>Present</span>
                </div>
                <div className="description">
                  <span>Bechlor of Engineering in Information Technology.</span>
                </div>
                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>LDCE, Ahmedabad.</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="about-photo">
          <div className="img-div">
            <div className="animate"></div>
            <img src="images/my.jpg" alt="" />
          </div>
        </div>
      </div>
      <Journey />
    </motion.div>
  );
};

export default About;

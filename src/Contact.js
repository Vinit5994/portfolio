import React from "react";
import "./about.css";
import "./contact.css";
import "./App.css";
// import { useEffect } from "react";
// import $ from "jquery";
const Contact = () => {
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
  //   // console.log(letters[0].textContent);
  //   for (let i = 0; i < letters.length; i++) {
  //     letters[i].addEventListener("mouseover", function () {
  //       // console.log("called");
  //       letters[i].classList.add("cn-active");
  //     });
  //   }
  // }
  // const observer = new IntersectionObserver((entries) => {
  //   // console.log(entries);
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       document
  //         .querySelectorAll(".contact-text span span span")
  //         .forEach((e) => e.classList.remove("cn-active"));
  //     }
  //   });
  // });
  // useEffect(() => {
  //   smoke(".contact-text span");
  //   observer.observe(document.querySelector(".contact-text"));
  //   // smoke(".email-text span");
  // }, []);

  return (
    <div id="contact" className="section">
      <div className="title">
        <div className="about-text">
          <span>Contact</span>
        </div>
        <div className="line"></div>
      </div>
      <div className="contact-info">
        <div
          className="contact-content"
          data-aos="fade-up"
          // data-aos-duration="1500"
        >
          <div className="contact-text">
            <span>Let me give you a beautiful website.</span>
          </div>
          {/* <div className="btn"> */}
          <div className="contact-btn">
            <span>Hire me</span>
          </div>
          {/* </div> */}
          <div className="email-text">
            <span>
              Do not hesitate to contact me. Direct email on&nbsp;
              <span className="mail">rushilmakvana@gmail.com</span>&nbsp; for
              any queries.
            </span>
            <div className="socials">
              <div className="social-text">
                contact me through social media.
              </div>
              <div className="icons">
                <div className="icon">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="copyright">
              <span className="copy">
                <i className="fa-regular fa-copyright"></i>
              </span>
              <span>Rushil Makvana</span>
            </div>
          </div>
        </div>
        <div className="svg">
          <img src="images/hello2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import "./navbar.css";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerSpin as Burger } from "react-burger-icons";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(true);

  function activateMenu() {
    const sections = document.querySelectorAll(".section");
    // console.log(sections);
    const links = document.querySelectorAll(".menu-item a");
    const new_links = document.querySelectorAll(".new-menu-item a");
    let current = "";
    sections.forEach((section) => {
      // console.log("scroll - ", window.scrollY);
      // console.log(
      //   section.getAttribute("id"),
      //   section.offsetTop,
      //   section.clientHeight,
      //   section.offsetTop - section.clientHeight / 4
      // );
      if (window.scrollY >= section.offsetTop - section.clientHeight / 4) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("menu-active");
      if (link.classList.contains(current + "_")) {
        link.classList.add("menu-active");
      }
    });

    new_links.forEach((link) => {
      link.classList.remove("menu-active");
      if (link.classList.contains(current + "__")) {
        link.classList.add("menu-active");
      }
    });

    // console.log(current);
    // console.log(window.scrollY);
  }
  // activateMenu();
  window.addEventListener("scroll", activateMenu);
  // const [isExit, setIsExit] = useState(false);
  return (
    <div className="navbar-outer">
      <div
        className="navbar"
        data-aos="fade-in"
        data-aos-delay="1000"
        data-aos-duration="1500"
      >
        <div className="logo">
          <h1>R</h1>
        </div>
        <div></div>
        {/* <div className="menu"> */}
        <ul className="menu">
          <li className="menu-item">
            <a href="#content" className="menu-active content_">
              Introduction
            </a>
          </li>
          <li className="menu-item">
            <a href="#about" className="about_">
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-item">
            <a href="#contact" className="contact_">
              Contact
            </a>
          </li>
          {/* <li className="menu-item">
            <i class="fa-solid fa-bars-sort"></i>
          </li> */}
        </ul>
        {/* </div> */}
      </div>
      <AnimatePresence>
        {isMenu && (
          <motion.div
            key="ham"
            className="hamburger"
            initial={{ x: 100 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.2,
              },
            }}
            // whileTap={{
            //   scale: 5,
            //   y: -150,
            // }}
            onClick={() => {
              setIsMenu(false);
            }}
            exit={{
              // scale: 5,
              x: 100,
            }}
            // onClick={function () {
            //   document.querySelector(".hamburger").style.display = "none";
            //   document.querySelector(".close").style.display = "flex";
            // }}
          >
            <div className="h-line"></div>
            <div className="h-line"></div>
            <div className="h-line"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isMenu && (
          <motion.div
            onClick={() => {
              setIsMenu(true);
            }}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{
              x: 500,
              transition: {
                duration: 0.3,
              },
            }}
            // transition={{ type: "spring", duration: 0.4 }}
            className="new-menu"
          >
            <div className="inner-menu">
              <div className="new-m-bar">
                <li className="new-menu-item">
                  <a href="#content" className="content__ menu-active">
                    <span>Introduction</span>
                  </a>
                </li>
                <li className="new-menu-item">
                  <a href="#about" className="about__">
                    <span>About</span>
                  </a>
                </li>
                <li className="new-menu-item">
                  <a href="#projects" className="projects__">
                    <span>Projects</span>
                  </a>
                </li>
                <li className="new-menu-item">
                  <a href="#contact" className="contact__">
                    <span>Contact</span>
                  </a>
                </li>
              </div>
              <div className="close">
                <div className="c-line"></div>
                <div className="c-line"></div>
              </div>
              {/* <i className="fa-solid fa-xmark"></i> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

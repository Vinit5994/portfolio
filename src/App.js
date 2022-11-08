import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Content from "./Content";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";
import Loader from "./Loader";
import Projects from "./Projects";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();
  useEffect(() => {
    if (!isLoading) {
      document.addEventListener("mousemove", (e) => {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      });
    }
    // console.log(ref.current);
    // const cursor=
  }, [isLoading]);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="container">
          <Navbar />
          <Content />
          <About />
          <Projects />
          <Contact />
          <div ref={ref} className="cursor"></div>
          {/* <Animate /> */}
        </div>
      </>
    );
  }
};

export default App;

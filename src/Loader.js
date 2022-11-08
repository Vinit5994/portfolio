import React from "react";
import { useEffect } from "react";
import "./loader.css";
import anime from "animejs";
const Loader = () => {
  useEffect(() => {
    const text = document.querySelector(".l-text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    anime
      .timeline({
        loop: false,
        // delay: 2000,
      })
      //   .add({
      //     targets: ".l-text span",
      //     translateY: [-600, 0],
      //     scale: [10, 1],
      //     opacity: [0, 1],
      //     easing: "easeOutExpo",
      //     duration: 500,
      //     // delay: 200,
      //     delay: anime.stagger(100),
      //   })
      //   .add({
      //     targets: ".l-text span",
      //     translateX: [0, -1000],
      //     scale: [1, 1],
      //     opacity: [1, 0],
      //     easing: "easeOutExpo",
      //     duration: 500,
      //     delay: anime.stagger(100),
      //   })
      .add({
        targets: ".l-text span",
        translateX: [1000, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: anime.stagger(100),
      })
      //   .add({
      //     targets: ".l-text span",
      //     rotate: function () {
      //       return anime.random(-360, 360);
      //     },
      //     translateX: function () {
      //       return anime.random(-500, 500);
      //     },
      //     translateY: function () {
      //       return anime.random(-500, 500);
      //     },
      //     duration: 1000,
      //     delay: anime.stagger(100),
      //     scale: [1, 1],
      //     opacity: [1, 1],
      //     easing: "easeOutExpo",
      //   })
      .add({
        targets: ".l-text span",
        translateX: [0, 0],
        scale: [1, 50],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 400,
        delay: anime.stagger(100),
      });
  }, []);

  return (
    <div className="l-body">
      <span className="l-text">&lt;&gt; hello world &lt;/&gt;</span>
    </div>
  );
};

export default Loader;

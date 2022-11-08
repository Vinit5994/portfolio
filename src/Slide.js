import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./styles.css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { EffectCreative } from "swiper";
import "swiper/css/pagination";
import { projects } from "./projects_info";
const Slide = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation, Pagination]}
        className="mySwiper3"
      >
        {projects.map((e) => {
          return (
            <SwiperSlide>
              <div className="project-item">
                <div className="proj-desc">
                  <div className="proj-title">
                    <span>{e.title}</span>
                  </div>
                  <div className="inner-proj-desc">
                    <span>{e.description}</span>
                  </div>
                  <div className="proj-tech">
                    {e.tech.map((e2) => (
                      <>
                        <span>{e2}</span>&nbsp;&nbsp;
                      </>
                    ))}
                  </div>
                  {e.isCode && (
                    <div className="code-link">
                      <a href={e.link}>
                        <span>
                          <i className={e.icon}></i>&nbsp;
                        </span>
                        <span>see code</span>
                      </a>
                    </div>
                  )}
                </div>
                <div className="proj-img">
                  <img src={e.image} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <div className="project-item">
            <div className="proj-desc">
              <div className="proj-title">
                <span>WhatsApp Clone</span>
              </div>
              <div className="inner-proj-desc">
                <span>
                  Live chat application where people can talk using chat or
                  video calls like Whatsapp.
                </span>
              </div>
              <div className="proj-tech">
                <span>#Flutter</span>&nbsp;&nbsp;
                <span>#Firebase</span>&nbsp;&nbsp;
                <span>#Agora</span>
              </div>
              <div className="code-link">
                <a href="">
                  <span>
                    <i className="fa-brands fa-github"></i>&nbsp;
                  </span>
                  <span>see code</span>
                </a>
              </div>
            </div>
            <div className="proj-img">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-item"></div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Slide;

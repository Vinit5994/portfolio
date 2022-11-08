import React from "react";
// import { useEffect } from "react";
import "./hello.css";
const Hello = () => {
  // useEffect(() => {
  //   const path = document.querySelectorAll("#hello path");
  //   console.log(path);
  //   for (var i = 0; i < path.length; i++) {
  //     console.log(path[i].getTotalLength());
  //   }
  // }, []);

  return (
    // <div className=>
    // <svg
    //   width="436"
    //   height="174"
    //   viewBox="0 0 436 174"
    //   fill="none"
    //   id="hello"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M12.8849 139V34.2727H25.5668V80.9091H81.4077V34.2727H94.0895V139H81.4077V92.1591H25.5668V139H12.8849Z"
    //     stroke="white"
    //     stroke-width="5"
    //   />
    //   <path
    //     d="M110.651 139V34.2727H173.855V45.5227H123.332V80.9091H170.582V92.1591H123.332V127.75H174.673V139H110.651Z"
    //     stroke="white"
    //     stroke-width="5"
    //   />
    //   <path
    //     d="M370 140.432C362.295 140.432 355.733 138.335 350.313 134.142C344.892 129.915 340.75 123.795 337.886 115.784C335.023 107.739 333.591 98.0227 333.591 86.6364C333.591 75.3182 335.023 65.6534 337.886 57.642C340.784 49.5966 344.943 43.4602 350.364 39.2329C355.818 34.9716 362.364 32.8409 370 32.8409C377.636 32.8409 384.165 34.9716 389.585 39.2329C395.04 43.4602 399.199 49.5966 402.062 57.642C404.96 65.6534 406.409 75.3182 406.409 86.6364C406.409 98.0227 404.977 107.739 402.114 115.784C399.25 123.795 395.108 129.915 389.688 134.142C384.267 138.335 377.705 140.432 370 140.432ZM370 129.182C377.636 129.182 383.568 125.5 387.795 118.136C392.023 110.773 394.136 100.273 394.136 86.6364C394.136 77.5682 393.165 69.8466 391.222 63.4716C389.313 57.0966 386.551 52.2386 382.938 48.8977C379.358 45.5568 375.045 43.8864 370 43.8864C362.432 43.8864 356.517 47.6193 352.256 55.0852C347.994 62.517 345.864 73.0341 345.864 86.6364C345.864 95.7045 346.818 103.409 348.727 109.75C350.636 116.091 353.381 120.915 356.96 124.222C360.574 127.528 364.92 129.182 370 129.182Z"
    //     stroke="white"
    //     stroke-width="5"
    //   />
    //   <path
    //     d="M265.182 139V34.2727H277.864V127.75H326.545V139H265.182Z"
    //     stroke="white"
    //     stroke-width="5"
    //   />
    //   <path
    //     d="M190.182 139V34.2727H202.864V127.75H251.545V139H190.182Z"
    //     stroke="white"
    //     stroke-width="5"
    //   />
    // </svg>
    <svg
      width="457"
      height="174"
      viewBox="0 0 457 174"
      fill="none"
      id="hello"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.0028 19.1461V118.997H84.1234V73.7275H33.8794V118.997H21V19.1461H33.8794V62.9831H84.1234V19.1461H97.0028Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M131.874 29.7472V63.1264H167.823V73.8708H131.874V108.253H172.069V118.997H118.994V19.0028H172.069V29.7472H131.874Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M204.437 108.396H238.971V118.997H191.557V19.1461H204.437V108.396Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M265.528 108.396H300.062V118.997H252.648V19.1461H265.528V108.396Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M358.464 120C349.311 120 340.961 117.851 333.413 113.553C325.864 109.16 319.873 103.096 315.438 95.3596C311.098 87.5281 308.927 78.7416 308.927 69C308.927 59.2584 311.098 50.5197 315.438 42.7837C319.873 34.9522 325.864 28.8876 333.413 24.5899C340.961 20.1966 349.311 18 358.464 18C367.711 18 376.108 20.1966 383.656 24.5899C391.205 28.8876 397.149 34.9045 401.49 42.6404C405.83 50.3764 408 59.1629 408 69C408 78.8371 405.83 87.6236 401.49 95.3596C397.149 103.096 391.205 109.16 383.656 113.553C376.108 117.851 367.711 120 358.464 120ZM358.464 108.683C365.352 108.683 371.532 107.059 377.004 103.812C382.571 100.565 386.912 95.9326 390.025 89.9157C393.233 83.8989 394.838 76.927 394.838 69C394.838 60.9775 393.233 54.0056 390.025 48.0843C386.912 42.0674 382.619 37.4354 377.146 34.1882C371.673 30.941 365.446 29.3174 358.464 29.3174C351.481 29.3174 345.254 30.941 339.781 34.1882C334.309 37.4354 329.969 42.0674 326.76 48.0843C323.647 54.0056 322.09 60.9775 322.09 69C322.09 76.927 323.647 83.8989 326.76 89.9157C329.969 95.9326 334.309 100.565 339.781 103.812C345.348 107.059 351.576 108.683 358.464 108.683Z"
        stroke="white"
        strokeWidth="3"
      />
    </svg>

    // </div>
  );
};

export default Hello;
import React from "react";
import "./future.css";
import { FaCirclePlay } from "react-icons/fa6";
const Future = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/bg3.jpg')`,
        width: "100%", // Full screen width
        height: "10rem", // Fixed height
        // backgroundSize: "contain", // Ensures full image is visible without cropping
        backgroundRepeat: "no-repeat", // Corrected spelling (not 'non-repeat')
        // backgroundPosition: "center", // Centers the image
        opacity: "0.6",

        zIndex: "1"
      }}
      className="future"
    >
      <div className="future-flex">
        <p>Shapping futures, one placement at one time</p>
        <div >
          <FaCirclePlay className="play-btn" />
        </div>
      </div>
    </div>
  );
};

export default Future;

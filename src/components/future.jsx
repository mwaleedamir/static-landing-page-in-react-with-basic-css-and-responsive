import React from "react";
import "./future.css";
const Future = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/bg4.jpeg') `,
        height: "15rem",
        backgroundSize: "cover",
        backgroundRepeat: 'non-repeat',
        opacity: '.5',
        zIndex: "1"
      }}
      className="future"
    >
      <p>Shapping futures, one placement at one time</p>
    </div>
  );
};

export default Future;

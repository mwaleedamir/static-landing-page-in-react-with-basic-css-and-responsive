import React from "react";
import "./feedback.css";

const Feedback = () => {
  return (
    <div className="feed-main">
      <div className="feedback-">
        <div className="feedback">
          <div className="feedback-left">
            <div>
              <div className="left-img1">
                <img className="s-img" src="/assets/ic1.png" alt="ic1" />
              </div>
              <div className="left-img2">
                <img className="s-img" src="/assets/ic2.png" alt="ic1" />
              </div>
              <div className="left-img3">
                <img className="s-img" src="/assets/ic3.png" alt="ic1" />
              </div>
            </div>
          </div>

          <div className="feedback-center">
            <h6>Testimorials</h6>
            <h1>Client Feedback</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quam
              sequi officiis eligendi ratione placeat tempora, adipisci
              dignissimos voluptatum, fuga ut voluptatibus veritatis? Ab labore
              qui odio, enim dolorem repudiandae!
            </p>
            <img className="s-img" src="assets/ic4.png" alt="" />
            <h2>Michal</h2>
            <p>It Specialist</p>
          </div>

          <div className="feedback-right">
            <div className="right-img1">
              <img className="s-img" src="/assets/ic2.png" alt="ic1" />
            </div>
            <div className="right-img2">
              <img className="s-img" src="/assets/ic3.png" alt="ic1" />
            </div>
            <div className="right-img3">
              <img className="s-img" src="/assets/ic4.png" alt="ic1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

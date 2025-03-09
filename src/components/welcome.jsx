import React from "react";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="welcome-main">
      <div className="writings">
        <div className="writingleft">
          <p className="welcome">Welcome to Trident</p>
          <p className="connecting">Connecting Talent, Building Careers </p>
          <p className="para">
            We're here to help you find the perfect job that suits your skills
            and interests.
          </p>
          <div className="writings-button">
            <button className="button-readmore">Read More</button>
            <button className="button-or">Or</button>
            <button className="button-explore">Explore More</button>
          </div>
        </div>
        <div className="writings-img">
          <img src="/assets/bg.jpeg" alt="bg" />
        </div>
      </div>

      <div class="boxes">
        <div class="box">
          <h1>Expert Agent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>v</button>
        </div>
        <div class="box">
          <h1>Expert Agent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>v</button>
        </div>
        <div class="box">
          <h1>Expert Agent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button>v</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

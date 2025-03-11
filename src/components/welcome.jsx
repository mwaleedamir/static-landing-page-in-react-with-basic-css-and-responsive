import React from "react";
import "./welcome.css";
import { FaLongArrowAltDown } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="welcome">
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
            <img src="/assets/bg1.jpg" alt="bg" />
          </div>  
        </div>

        <div className="boxes">
          <div className="box">
            <h1>Expert Agent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="box-button">
              <button><FaLongArrowAltDown className="flong"/></button>
            </div>
          </div>
          <div className="box">
            <h1>Expert Agent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="box-button">
              <button><FaLongArrowAltDown className="flong"/></button>
            </div>
          </div>
          <div className="box">
            <h1>Expert Agent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="box-button">
              <button><FaLongArrowAltDown className="flong"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import "./faq.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Faq = () => {
  return (
    <div className="faq-">
      <div className="faq">
        <div className="form">
          <div>
            <h1>Have Any thing to ask ?</h1>
          </div>
          <div className="form-input">
            {/* <div className="text">
           </div> */}
            <input type="text" placeholder="Name" />
            {/* <div className="text">
          </div> */}
            <input type="text" placeholder="Email" />
            {/* <div className="text">
          </div> */}
            <input type="text" placeholder="Subject" />
            <textarea
              className="text-box"
              rows={4}
              placeholder="Your message"
            />
            <button className="btn">Submit</button>
          </div>
        </div>
        <div className="questions">
          <h3>FAQ</h3>
          <div>
            <h1>Our Frequently asked question</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, officia libero ea laboriosam a impedit, quisquam
              similique iste optio commodi
            </p>
          </div>
          <div>
            <div className="q1">
              <div className="arrow">
                <MdKeyboardArrowUp />
              </div>
              <h2>Our Frequently asked question</h2>
            </div>
            <div className="border" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, officia libero ea laboriosam a impedit, quisquam
              similique iste optio commodi, neque odio at ut? Nulla recusandae
              quae pariatur adipisci. Obcaecati? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Blanditiis, officia libero ea
              laboriosam a impedit, quisquam similique iste optio commodi, neque
              odio at ut? Nulla recusandae quae pariatur adipisci. Obcaecati?
            </p>

            <div className="q1">
              <div className="arrow">
                <MdKeyboardArrowDown />
              </div>
              <h2>Our Frequently asked question</h2>
            </div>
            <div className="border" />

            <div className="q1">
              <div className="arrow">
                <MdKeyboardArrowDown />
              </div>
              <h2>Our Frequently asked question</h2>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <div className="form">
        <h1>Have Any thing to ask ?</h1>
        <div className="text">
          <input type="text" placeholder="Name"/>
        </div>
        <div className="text">
          <input type="text" placeholder="Email"/>
        </div>
        <div className="text">
          <input type="text" placeholder="Subject"/>
        </div>
        <div className="text-box">
          <input type="text" placeholder="Your message" />
        </div>
      </div>
      <div className="questions">
        <h3>FAQ</h3>
        <div>
          <h1>Our Frequently asked question</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, officia libero ea laboriosam a impedit, quisquam
            similique iste optio commodi, neque odio at ut? Nulla recusandae
            quae pariatur adipisci. Obcaecati?
          </p>
        </div>
        <div>
          <h2>Our Frequently asked question</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, officia libero ea laboriosam a impedit, quisquam
            similique iste optio commodi, neque odio at ut? Nulla recusandae
            quae pariatur adipisci. Obcaecati?
          </p>
          <h2>Our Frequently asked question</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, officia libero ea laboriosam a impedit, quisquam
            similique iste optio commodi, neque odio at ut? Nulla recusandae
            quae pariatur adipisci. Obcaecati?
          </p>
          <h2>Our Frequently asked question</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, officia libero ea laboriosam a impedit, quisquam
            similique iste optio commodi, neque odio at ut? Nulla recusandae
            quae pariatur adipisci. Obcaecati?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

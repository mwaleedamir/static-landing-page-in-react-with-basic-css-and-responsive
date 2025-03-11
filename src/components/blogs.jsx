import React from "react";
import "./blogs.css";
import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-top">
        <h2>Blogs & Article</h2>
        <div className="blogs-flex">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="blogs-button">
            <button>All blogs and aticle</button>
          </div>
        </div>
      </div>
      <div className="blogs-bottom">
        <div className="blogs-box">
          <button>Candidate interview</button>
          <div className="blogs-img">
            <img src="/assets/bg2.jpeg" alt="bg" />
            <div className="date">
              <p><IoPerson/> types</p>
              <p><FaCalendarAlt/> August 20, 2025</p>
            </div> 
            <h1>The power of networking in your jobs</h1>
            <p> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corrupti quam quisquam voluptatum exercitationem cumque at
              nesciunt facere magnam. Labore sapiente, eaque quibusdam sequi
              iure voluptas.
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <button>Candidate interview</button>
          <div className="blogs-img">
            <img src="/assets/bg2.jpeg" alt="bg" />
            <div className="date">
              <p><IoPerson/> types</p>
              <p><FaCalendarAlt/> August 20, 2025</p>
            </div>
            <h1>The power of networking in your jobs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corrupti quam quisquam voluptatum exercitationem cumque at
              nesciunt facere magnam. Labore sapiente, eaque quibusdam sequi
              iure voluptas.
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <button>Candidate interview</button>
          <div className="blogs-img">
            <img src="/assets/bg2.jpeg" alt="bg" />
            <div className="date">
              <p><IoPerson/> types</p>
              <p><FaCalendarAlt/> August 20, 2025</p>
            </div>
            <h1>The power of networking in your jobs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corrupti quam quisquam voluptatum exercitationem cumque at
              nesciunt facere magnam. Labore sapiente, eaque quibusdam sequi
              iure voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

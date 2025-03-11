import React from "react";
import "./about.css";

const About = () => {
  return (
    <div class="about- ">
      <div className="about">
        <div class="about-img">
          <img src="/assets/bg2.jpeg" alt="bg" />
        </div>

        <div class="about-right">
          <h5 class="about-subheadng">About Trident</h5>
          <h1 class="about-mainheading">Nutring Talent, Feuling Growth</h1>
          <p class="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            facilisis dui. Sed vel euismod massa, sed tincidunt ipsum. Nullam
            euismod, velit ut consectetur sagittis, nunc massa malesuada massa,
            vel facilisis nisi justo eu justo. Duis vitae dui at ex gravida
            scelerisque. Nulla facilisi. Maecenas sit amet velit vel nisi
            ullamcorper luctus vel ut nisi.
          </p>
          <div class="about-grid">
            <div className="grid-row">
              <div className="grid-img">
                <img src="/assets/ic1.png" alt="img1" />
              </div>
              <div className="grid-col">
                <h1>25000 +</h1>
                <p>Has fine theri jobs</p>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-img">
                <img src="/assets/ic2.png" alt="img1" />
              </div>
              <div className="grid-col">
                <h1>50 +</h1>
                <p>Recuiters</p>
              </div>
            </div>
            <div className="grid-row">
              <button>Read more</button>
            </div>

            <div className="grid-row">
              <div className="grid-img">
                <img src="/assets/ic3.png" alt="img1" />
              </div>
              <div className="grid-col">
                <h1>25000 +</h1>
                <p>Has fine theri jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./choose.css";

const Choose = () => {
  return (
    <div className="choose">
      <div className="choose-img">
        <img className="img1" src="/assets/bg2.jpeg" alt="bg" />
        <img className="img2" src="/assets/bg.jpeg" alt="bg1" />
      </div>

      <div className="choose-right">
        <h5 >choose Trident</h5> 
        <h1 >Nutring Talent, Feuling Growth</h1>
        <p className="choose-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          facilisis dui. Sed vel euismod massa, sed tincidunt ipsum. Nullam
          euismod,
        </p>

        <div className="choose-para">
          <h1>01</h1>
          <div className="para-col">
            <h2>Nutring Talent Feuling</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet esse repellendus, itaque consequuntur enim ducimus repellat tenetur aperiam debitis facere voluptatem rerum?</p>
          </div>
        </div>
        <div className="choose-para">
          <h1>02</h1>
          <div className="para-col">
            <h2>Nutring Talent Feuling</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet esse repellendus, itaque consequuntur enim ducimus repellat tenetur aperiam debitis facere voluptatem rerum?</p>
          </div>
        </div>
        <div className="choose-para">
          <h1>03</h1>
          <div className="para-col">
            <h2>Nutring Talent Feuling</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet esse repellendus, itaque consequuntur enim ducimus repellat tenetur aperiam debitis facere voluptatem rerum?</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Choose;

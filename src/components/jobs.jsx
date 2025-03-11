import React from "react";
import "./jobs.css";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const Jobs = () => {
  return (
    <div className="jobs-">
      <div className="jobs">
        <div className="jobs-left">
          <h2 className="jobs-subheadings">what we serve </h2>
          <h1 className="jobs-mainheadings">Tailoring For Excellence</h1>
          <p className="jobs-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            facilisis dui. Sed vel euismod massa, sed tincidunt ipsum. Nullam
            euismod, velit ut consectetur sagittis, nunc massa malesuada massa,
            vel facilisis nisi justo eu justo..
          </p>
          <button className="jobs-left-button">
            View All <FaLongArrowAltRight className="button-flex" />{" "}
          </button>
        </div> 

        <div className="jobs-boxes">
          <div className="jobs-box">
            <div className="box-head">
              <div className="box-img">
                <img src="/assets/ic1.png" alt="icon" />
              </div>
              <h1 className="jobs-mainheadings">Tailoring Excellence</h1>
            </div>
            <div className="space" />
            <div className="job-para">
              <div className="loc-flex">
                <CiLocationOn className="loc-img" />
                <p className="jobs-p">canada</p>
              </div>
              <div className="loc-flex">
                <CiClock2 className="loc-img" />
                <p className="jobs-p">Full time</p>
              </div>
            </div>
            <button className="job-b">Job details</button>
          </div>

          <div className="jobs-box">
            <div className="box-head">
              <div className="box-img">
                <img src="/assets/ic1.png" alt="icon" />
              </div>
              <h1 className="jobs-mainheadings">Tailoring Excellence</h1>
            </div>
            <div className="space" />
            <div className="job-para">
              <div className="loc-flex">
                <CiLocationOn className="loc-img" />
                <p className="jobs-p">canada</p>
              </div>
              <div className="loc-flex">
                <CiClock2 className="loc-img" />
                <p className="jobs-p">Full time</p>
              </div>
            </div>
            <button className="job-b">Job details</button>
          </div>
          <div className="jobs-box">
            <div className="box-head">
              <div className="box-img">
                <img src="/assets/ic1.png" alt="icon" />
              </div>
              <h1 className="jobs-mainheadings">Tailoring Excellence</h1>
            </div>
            <div className="space" />
            <div className="job-para">
              <div className="loc-flex">
                <CiLocationOn className="loc-img" />
                <p className="jobs-p">canada</p>
              </div>
              <div className="loc-flex">
                <CiClock2 className="loc-img" />
                <p className="jobs-p">Full time</p>
              </div>
            </div>
            <button className="job-b">Job details</button>
          </div>
          <div className="jobs-box">
            <div className="box-head">
              <div className="box-img">
                <img src="/assets/ic1.png" alt="icon" />
              </div>
              <h1 className="jobs-mainheadings">Tailoring Excellence</h1>
            </div>
            <div className="space" />
            <div className="job-para">
              <div className="loc-flex">
                <CiLocationOn className="loc-img" />
                <p className="jobs-p">canada</p>
              </div>
              <div className="loc-flex">
                <CiClock2 className="loc-img" />
                <p className="jobs-p">Full time</p>
              </div>
            </div>
            <button className="job-b">Job details</button>
          </div>
          <div className="jobs-box">
            <div className="box-head">
              <div className="box-img">
                <img src="/assets/ic1.png" alt="icon" />
              </div>
              <h1 className="jobs-mainheadings">Tailoring Excellence</h1>
            </div>
            <div className="space" />
            <div className="job-para">
              <div className="loc-flex">
                <CiLocationOn className="loc-img" />
                <p className="jobs-p">canada</p>
              </div>
              <div className="loc-flex">
                <CiClock2 className="loc-img" />
                <p className="jobs-p">Full time</p>
              </div>
            </div>
            <button className="job-b">Job details</button>
          </div>
          <div className="jobs-box">
            <div className="box-head">
              <div className="box-img">
                <img src="/assets/ic1.png" alt="icon" />
              </div>
              <h1 className="jobs-mainheadings">Tailoring Excellence</h1>
            </div>
            <div className="space" />
            <div className="job-para">
              <div className="loc-flex">
                <CiLocationOn className="loc-img" />
                <p className="jobs-p">canada</p>
              </div>
              <div className="loc-flex">
                <CiClock2 className="loc-img" />
                <p className="jobs-p">Full time</p>
              </div>
            </div>
            <button className="job-b">Job details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

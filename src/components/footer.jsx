import React from "react";
import "./footer.css";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaAddressCard
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="up-nav">
          <div className="footer-logo">
            <h1>Trident</h1>
          </div>

          <div className="up-nav-r">
            <div className="up-nav-r-flex">
              <div className="up-nav-s">
                <FaPhone />
              </div>
              <div className="up-nav-r-flex-col">
                <p>Phone number</p>
                <h3>+91 1234567890</h3>
              </div>
            </div>
          </div>

          <div className="up-nav-r">
            <div className="up-nav-r-flex">
              <div className="up-nav-s">
                <MdOutlineMail />
              </div>
              <div className="up-nav-r-flex-col">
                <p>Email</p>
                <h3>email@gmail.com</h3>
              </div>
            </div>
          </div>

          <div className="up-nav-r">
            <div className="up-nav-r-flex">
              <div className="up-nav-s">
                <FaAddressCard />
              </div>
              <div className="up-nav-r-flex-col">
                <p>Office Address</p>
                <h3>99 Roving St PKU</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="down-nav">
          <div className="footer-about">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim in, adipiscing in,
              cursus et, eros.
            </p>
            <div className="facebook">
              <FaFacebook />
              <FaFacebookMessenger />
              <FaInstagramSquare />
            </div>
          </div>

          <div className="down">
            <h1>Usefull Link</h1>

            <div className="down-flex-col">
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
            </div>
          </div>

          <div className="down">
            <h1>What we do</h1>
            <div className="down-flex-col">
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
              <div className="down-flex-row">
                <div className="flex-row">
                  <FaGreaterThan />
                </div>
                <p>Career</p>
              </div>
            </div>
          </div>

          <div className="subscribe">
            <h1>Subscribe & Get Update Repeatedly</h1>
            <div>
              <input type="text" placeholder="Your Email" name="" id="" />
            </div>
            <div>
              <button className="subscribe-now-button">Subsribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2025 © Tridient | powered by Rothem studio</p>
      </div>
    </div>
  );
};

export default Footer;

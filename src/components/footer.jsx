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
      <div className="footer-grid">
        <div className="footer-logo">
          <h1>Trident</h1>
        </div>

        <div className="number">
          <div className="number-flex">
            <div className="phone">
              <FaPhone />
            </div>
            <div className="number-flex-col">
              <p>Phone number</p>
              <h1>+91 1234567890</h1>
            </div>
          </div>
        </div>

        <div className="email">
          <div className="email-flex">
            <div className="email-num">
              <MdOutlineMail />
            </div>
            <div className="email-flex-col">
              <p>Email</p>
              <h1>email@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="address">
          <div className="address-flex">
            <div className="address-num">
              <FaAddressCard />
            </div>
            <div className="address-flex-col">
              <p>Office Address</p>
              <h1>99 Roving St PKU</h1>
            </div>
          </div>
        </div>

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

        <div className="usefull">
          <h1>Usefull Link</h1>

          <div className="usefull-flex-col">
            
            <div className="useful-flex-row">
              <div className="flex-row">
                <FaGreaterThan />
              </div>
              <p>Career</p>
            </div>
            <div className="useful-flex-row">
              <div className="flex-row">
                <FaGreaterThan />
              </div>
              <p>Career</p>
            </div>
            <div className="useful-flex-row">
              <div className="flex-row">
                <FaGreaterThan />
              </div>
              <p>Career</p>
            </div>
            <div className="useful-flex-row">
              <div className="flex-row">
                <FaGreaterThan />
              </div>
              <p>Career</p>
            </div>
            <div className="useful-flex-row">
              <div className="flex-row">
                <FaGreaterThan />
              </div>
              <p>Career</p>
            </div>
            <div className="useful-flex-row">
              <div className="flex-row">
                <FaGreaterThan />
              </div>
              <p>Career</p>
            </div>
          </div>
        </div>

        <div className="we-do">
          <h1>What we do</h1>
          <div className="we-do-flex-col">
            <div className="we-do-flex-row">
              <FaGreaterThan />
              <h1>Career</h1>
            </div>
            <div className="we-do-flex-row">
              <FaGreaterThan />
              <h1>Career</h1>
            </div>
            <div className="we-do-flex-row">
              <FaGreaterThan />
              <h1>Career</h1>
            </div>
            <div className="we-do-flex-row">
              <FaGreaterThan />
              <h1>Career</h1>
            </div>
            <div className="we-do-flex-row">
              <FaGreaterThan />
              <h1>Career</h1>
            </div>
          </div>
        </div>
        <div className="subsribe">
          <h1>Subscribe & Get Update Repeatedly</h1>
          <input type="text" placeholder="Your Email" name="" id="" />
          <button>Subsribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

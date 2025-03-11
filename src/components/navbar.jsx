import React, { useState, useEffect } from "react";
import "./navbar.css";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { ImCross } from "react-icons/im";

export const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  // Handle window resize event to update width
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle the navbar state
  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      {width < 600 ? (
        <div>
          <div className="flex-nav">
            <div className="navbar-logo">
              <div href="#">Trident</div>
            </div>
            <div className="nav-button">
              <button onClick={toggleNavbar}>
                {isOpen ? <ImCross /> : <RxDragHandleHorizontal />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="navbar-items">
              <a href="#">Homepage</a>
              <a href="#">About Us</a>
              <a href="#">Job lists</a>
              <a href="#">Pages</a>
              <a href="#">Contact Us</a>
            </div>
          )}
        </div>
      ) : (
        <div className="display-flex">
          <div className="navbar-logo" href="#">
            Trident
          </div>
          <div className="navbar-items">
            <a href="#">Homepage</a>
            <a href="#">About Us</a>
            <a href="#">Job lists</a>
            <a href="#">Pages</a>
            <a href="#">Contact Us</a>
          </div>
          <p className="navbar-contact">+190-992-9202</p>
        </div>
      )}
    </nav>
  );
};

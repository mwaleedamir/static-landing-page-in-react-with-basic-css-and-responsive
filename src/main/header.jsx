import React from "react";
import { Navbar } from "../components/navbar";
import Welcome from "../components/welcome";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Welcome />
    </div>
  );
};

export default Header;

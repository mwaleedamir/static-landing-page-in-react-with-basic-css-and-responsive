import React from "react";
import Services from "../components/services";
import Jobs from "../components/jobs";
import About from "../components/about";
import Choose from "../components/choose";
import Future from "../components/future";
import Services2 from "../components/services2";
import Feedback from "../components/feedback";
import Faq from "../components/faq";
import Percentage from "../components/percentage";
import Footer from "../components/footer";
import Blogs from "../components/blogs";
import './body.css'
const Body = () => {
  return (
    <div className="body">

      <About />
      <div className="Services">
      <Services />
      </div>
      <Jobs />
      <Choose/>
      <Future/>
      <Services2/>
      <Feedback/>
      <Faq/>
      <Percentage/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default Body;

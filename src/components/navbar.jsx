// import React, { useEffect, useState } from "react";
import "./navbar.css";
// import { RxDragHandleHorizontal } from "react-icons/rx";
// import { ImCross } from "react-icons/im";

import { useState, useEffect } from "react";

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(true);

//   const toggle = () => {
//     if (isOpen) {
//       setIsOpen(!isOpen);
//     }
//   };
//   useEffect(()=>{
//     //add event for window resize
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 768) {
//         setIsOpen(true);
//       }
//     });
//     return () => {
//       window.removeEventListener('resize', () => {});
//     }  // cleanup function to remove event listener when component unmounts
//   },[])
//   // i need to refactor this component , you can add inline styles to make the navbar component

//   return (
//     <nav className="navbar">
//       <button onClick={toggle} className="navbar-button">
//         {isOpen ? <RxDragHandleHorizontal /> : <ImCross />}
//       </button>

//       {isOpen
//         ? <div>
//             <div className="navbar-logo">
//               <div href="#">Trident</div>
//             </div>

//             <div className={window.innerWidth > 900 ? "navbar-items" : ""}>
//               <a href="#">Homepage</a>
//               <a href="#">About Us</a>
//               <a href="#">Job lists</a>
//               <a href="#">Pages</a>
//               <a href="#">Contact Us</a>
//             </div>

//             <p className="navbar-contact">+190-992-9202</p>
//           </div>
//         : <div>
//             <div className="navbar-logo">
//               <div href="#">Trident</div>
//             </div>

//             <div className="navbar-items">
//               <a href="#">Homepage</a>
//               <a href="#">About Us</a>
//               <a href="#">Job lists</a>
//               <a href="#">Pages</a>
//               <a href="#">Contact Us</a>
//             </div>

//             <p className="navbar-contact">+190-992-9202</p>
//           </div>}
//     </nav>
//   );
// };

// export default Navbar;
// i need to make this component responsive, and also add the drag handle functionality to the hamburger menu

export const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  //write a function to handle window resize event
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div href="#">Trident</div>
      </div>

      <div className={"navbar-items"}>
        <a href="#">Homepage</a>
        <a href="#">About Us</a>
        <a href="#">Job lists</a>
        <a href="#">Pages</a>
        <a href="#">Contact Us</a>
      </div>

      <p className={`navbar-contact, ${width < 600 ? 'navbar-contact-mobile': ''}`}>+190-992-9202</p>
    </nav>
  );
};

import React, { useState } from "react";
import "./style.css";
import arrow_icon from "../../assests/arrow.png";

const Journeryboard = () => {
  const [open, setopen] = useState(false);
  const handleArrowClick = () => {
    setopen(!open);
    console.log("clicked")
  };
  return (
    <div className={`journey-board ${open ? "open" : ""}`}>
      <div className="journey-board-header">
        <p>{open ? "Journey Board" : ""}</p>
        <img
          src={arrow_icon}
          alt=""
          srcset=""
          className={`arrow-icon ${open ? "rotated" : ""}`}
          onClick={handleArrowClick}
        />
      </div>
      <div className="journey-board-main">
        {open && (
          <div className="journey-board-main-wrapper">
            
          <ul className="journey-board-main-heading"> 
           <li> Explore the world of management</li>
        </ul>
          <ul className="journey-board-main-title">
          <li> Technical Project Management</li>
          <li>Threadbuild</li>
          <li> Structure your pointers</li>
          <li> 4SA Method</li>
        </ul>
          </div>
         )}
      </div>
    </div>
  );
};

export default Journeryboard;

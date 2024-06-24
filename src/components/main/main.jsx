import React from "react";
import Card from "../card/card";
import "./style.css";
import question_mark from "../../assests/questionmark.png";
import meeting from "../../assests/meeting.png";
import schedule_icon from "../../assests/schedule.png";
import blue_img from "../../assests/blue.png";
const Main = () => {
  return (
    <main>
      <ul className="title">
        <li className="tile-firstchild">Technical Project Management</li>
        <li className="title-secondChild">Submit task</li>
      </ul>

      <div className="topic">
        <h3>Explore the world of management</h3>
        <p>
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
      <div className="card-container">
        <Card type={"video"} />
        <Card type={"threadbuilder"} />
        <Card type={"article"} />
        <Card type={"articles"} />
      </div>
      <div className="main-icon-container">
        <div className="card-main-icon-container">
          <img src={blue_img} alt="" srcset="" className="blue-icon" />
          <img src={question_mark} alt="" srcset="" className="main-icon" />
        </div>
        <div className="card-main-icon-container">
          <img src={blue_img} alt="" srcset="" className="blue-icon" />

          <img src={meeting} alt="" srcset="" className="main-icon" />
        </div>
        <div className="card-main-icon-container">
          <img src={blue_img} alt="" srcset="" className="blue-icon" />

          <img src={schedule_icon} alt="" srcset="" className="main-icon" />
        </div>
      </div>
    </main>
  );
};

export default Main;

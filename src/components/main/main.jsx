import React from "react";
import Card from "../card/card";
import "./style.css";
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
        <Card type={"article"} />
        
        
       
      </div>
    </main>
  );
};

export default Main;

import React from "react";
import "./style.css";
import info_icon from "../../assests/info.png";
import upper_icon from "../../assests/upper-arrow.png";
import group_icon from "../../assests/Group-Icon.png";
import down_icon from "../../assests/down-arrow.png";
import plus_icon from "../../assests/plus.png";
import undo_icon from "../../assests/undo.png";
import redo_icon from "../../assests/redo.png";
import expand_icon from "../../assests/expand.png";
import { PiDotsThreeBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const Card = (props) => {
  const { type } = props;

  return (
    <div className="cards">
      <div className="card-header">
        <p>Technical Project Management</p>
        <img src={info_icon} alt="" className="info-icon" />
      </div>
      <div className="card-description">
        <p className="description-title">Description </p>:
        <p className="description">
          Story of Alignment Scope of Agility Specific Accountable Staggering
          Approach
        </p>
      </div>
      <div className="types">
        {type === "video" && (
          <div className="video-container">
          </div>
        )}
        {type === "threadbuilder" && (       
        <div className="threadbuilder">    
          <div className='thredbuilder-heading'>
            <img src={upper_icon} alt=""  />
            <p>Thread A</p>
            </div>        
            <div  className='threadbuilder-container'>
            <div className='input-container'>
                <p className='inputs-heading'>Sub thread 1</p>
                <input type="text" placeholder='Enter Text here' />
              
              <img src={group_icon} alt="" srcset="" className='threadbuilder-input-icons' />
            </div>
            <div className='input-container'>
                <p className='inputs-heading'>Sub thread 1</p>
                <input type="text" placeholder='Enter Text here' />
              <div className='btn-container'>
                
              <div className='select-btn'>
                <p>Select Categ</p>
                <img src={down_icon} alt="" className='' />
              </div>
              <div className='select-btn'>
                <p>Select Proces</p>
                <img src={down_icon} alt="" className='' />

              </div>
              </div>
            </div>
              </div>
            <div className='threadbuilder-submit-btn'>
              <img src={plus_icon} alt="" />
              <p>Sub-thread</p>
            </div>
            <div className='threadbuilder-summary-container'>
              <p> Summary for Thread A</p>
              <input type="text" placeholder='Enter Text Here'  />
            </div>
           
          </div>
           )}
        { type === "article" && (           
           <div className='pointers'>
            <div className='pointer-title-container'>
              <p>Title</p>
              <input type="text" placeholder='' />
            </div>
            <div className='pointer-content-container'>
              <p>Content</p>
              <div className='pointer-content'>
                <ul className='pointer-content-tools'>
                  <li>Edit</li>
                  <li>File</li>
                  <li>View</li>
                  <li>Insert</li>
                  <li>Format</li>
                  <li>Tools</li>
                  <li>Table</li>
                  <li>Help</li>
                  <li>
                    <img src={undo_icon} alt="" />
                  </li>
                  <li>
                    <img src={redo_icon} alt="" />
                  </li>
                  <li>
                    <img src={expand_icon} alt="" />
                  </li>
                  <li className='li-tool-input'>
                    <input type="text"  className='tool-input' placeholder='Paragraph'/>
                  </li>
                  <li>
                  <BsThreeDots color='gray' />
                  </li>
                </ul>
                <div className='pointer-content-space'>

                </div>
              </div>
            </div>

           </div>
           )}
           { type === "articles" && (

           
        <div className="method">
          <div className="method-introduction">
            <img src={upper_icon} alt="" />
            <p>Introduction </p>
          </div>
          <p className="introduction-p">
            The 4SA Method , How to bring a idea into progress ?
          </p>
          <p className="see-more">See More</p>
          <div className="method-thread">
            <img src={upper_icon} alt="" />
            <p>Thread A </p>
          </div>
          <p className="thread-p">
            How are you going to develop your stratergy ? Which method are you
            going to use to develop a stratergy ? What if the project is
            lengthy?
          </p>
          <p className="see-more second">See More</p>
          <div className="method-example-wrapper">
          <div className="method-example">
            <p>Example 1</p>
          </div>
          <p className="method-example-p">You have a concept , How will you put into progress?</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Card;

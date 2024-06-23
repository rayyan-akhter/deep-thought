import React from 'react'
import "./style.css"
import arrow_icon from "../../assests/arrow.png"

const Journeryboard = () => {
  return (
    <div className='journey-board'>
        <div className='journey-board-header'>
            <p></p>
            <img src={arrow_icon} alt="" srcset="" />
        </div>
        <div className='journey-board-main'></div>
    </div>
  )
}

export default Journeryboard;
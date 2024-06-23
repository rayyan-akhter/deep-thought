import React from 'react'
import "./style.css"
import cross_icon from "../../assests/cut.png"

const Noticeboard = () => {
  return (
    <div className='notice-board'>
        <div className='notice-board-header'>
            <img src={cross_icon} alt="" srcset="" />
            <div>{"Notice board".split("").map(letter=><span className='letter-span'>{letter}</span>)}</div>
        </div>
        <div className='notice-board-main'></div>
    </div>
  )
}
export default Noticeboard;
import React from 'react'
import "./style.css"
import logo from "../../assests/logoo.svg"
import home_icon from "../../assests/Group 1100.png"
import setting_icon from "../../assests/Group 1097.png"
import notification_icon from "../../assests/Vector.png"
import profile_icon from "../../assests/Ellipse 53.png"
import { BsThreeDotsVertical } from 'react-icons/bs'
const Header = () => {
  return (
    <header>
        <img src={logo} alt="icon"  className='logo' />
        <div className='icon-container'>
            <img src={setting_icon} alt=""  className='icon'/>
            <img src={home_icon} alt=""  className='icon' />
            <img src={notification_icon} alt=""  className='icon' />
            <img src={profile_icon} alt=""  className='icon' />
            <BsThreeDotsVertical color='blue' size={27}/>
        </div>
    </header>
  )
}

export default Header;


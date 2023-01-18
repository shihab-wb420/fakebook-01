import React from "react"
import {NavLink,useLocation  } from "react-router-dom"
import "./styles/navbar.css"
import avatar from "../assets/icons/avatar5.png"
import menueIcon from "../assets/icons/menu-2-fill.svg"
import searchIcon from "../assets/icons/search-line.svg"
import messengerIcon from "../assets/icons/messenger.svg"
import notificationIcon from "../assets/icons/notification-4-line.svg"
import homeIcon from "../assets/icons/ic_home.png"
import friendIcon from "../assets/icons/ic_add_friend.png"



const Navbar = ()=>{
  const location = useLocation()
//  const navigate = useNavigate()
  
  let isHome=false; 
  let isNav= false;
  if(location.pathname === "/"){
    isHome=true;
  } 
  if(location.pathname === "/create_post"){
    isNav=true;
  }
  
  
  return (
      <div className={`navbar_container ${isNav&&"hide"}`}>
        <div className={`firstNav ${isHome && "displayActive"}`}>
          <div id="logo">
            fakebook
          </div>
          <div className="rightSide">
            <NavLink 
              className="linkItem"
              to={`search`}
             >
              <img 
                className="common_svgIcon" 
                src={searchIcon} alt=""
               />
            </NavLink>          
            <NavLink 
              className="linkItem"
              to="profile"
             > 
              <img className="avatar border-round" src={avatar} alt=""/>
            </NavLink>
            <NavLink 
              className="linkItem"
              to="#menu"
             >
               <img className="common_svgIcon" src={menueIcon} alt=""/>
            </NavLink>            
          </div>
        </div>{/*#### ❤️ End firstNav*/}
        
        <div className="secondNav">
          <NavLink 
           className="linkItem"
           to="/"
          >
            <img style={{
              /*filter:"brightness(1000%) grayscale(0%)"
           */ }} className="common_svgIcon" src={homeIcon} alt=""/>
          </NavLink>
          <NavLink 
           className="linkItem"
           to="friends"
          >
           <img className="friendIcon" src={friendIcon} alt=""/>
          </NavLink>
          <NavLink 
           className="linkItem"
           to="chats"
          > 
          {
           <img 
              className="common_svgIcon" 
              src={messengerIcon} alt=""/>
          }
          </NavLink>          
          <NavLink 
           className="linkItem"
           to="notification"
          >
             <img className="common_svgIcon" src={notificationIcon} alt=""/>
           
          </NavLink>
        </div>{/*#### ❤️ End secondNav*/}
        
        {/****************************/}
         
        {/****************************/}
        
      </div>
    )
}

export default Navbar

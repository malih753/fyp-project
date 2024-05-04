import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
// import { MdOutlineExpandMore } from "react-icons/md";
import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<MdDashboard style={{paddingLeft:"-2px", fontSize:"30px", width:"25px", marginRight:"-10px"}}/>
        },
        {
            path:"/offeredtest",
            name:"Offer Test",
            icon:<FaNoteSticky style={{paddingLeft:"0px", fontSize:"25px", width:"30px", marginRight:"-13px"}}/>
        },
        {
            path:"/orders",
            name:" Orders",
            icon:<BsBoxSeamFill style={{paddingLeft:"-2px", fontSize:"35px", width:"30px", marginRight:"-30px" }}/>
        },
        {
            path:"/pages",
            name:" Pages",
            icon:<AiFillFileText style={{paddingLeft:"-2px", fontSize:"35px", width:"30px", marginRight:"-30px" }}/>
        },
    ]
    return (
        <div className="containers">
           <div  className="sidebars">
               <div className="top_sections">
                   <div  className="bars">
                   </div>
               </div>
               
               {
                   menuItem.map((item, index)=>(     
                       <NavLink to={item.path} key={index} className="links" >
                           <div  className="link_texts"> <p className='icons-class'>{item.icon}</p> <p style={{paddingLeft:"10px"}}>{item.name}</p> </div>
                       </NavLink>
                   ))
               }
              <hr />
              <div style={{display:"flex", marginLeft:"90px" , }}>
                 <NavLink to="/settings" style={{color:"black"}}> 
                     <h4> <IoSettingsSharp style={{marginLeft:"-5px", fontSize:"70px", width:"30px", marginTop:"-7px", color:"black"}}/>  Setting </h4>
                 </NavLink>  
              </div>
           </div>
           
           <main className='mains'>{children}</main>
        </div>
    );
};

export default Sidebar;
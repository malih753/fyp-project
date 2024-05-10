import React, { useState,useEffect } from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { LuTestTube } from "react-icons/lu";
import { ImUsers } from "react-icons/im";
import { BsCollection } from "react-icons/bs";
import { TbMessage2Cancel } from "react-icons/tb";
import { AiFillFileText } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import '../superadmin/settings.css';
import LabHeader from './../account/profile/LabHeader';
// import { MdOutlineExpandMore } from "react-icons/md";
import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import OfferedTest from './OfferedTest';
import Orders from './Orders';
import Pages from './Pages';

const Sidebar = ({ children }) => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        setActiveTab('dashboard');
    }, []);
    
    return (
        // <div className="containers">
        //     <div className="sidebars">
        //         <div className="top_sections">
        //             <div className="bars">
        //             </div>
        //         </div>

        //         {
        //             menuItem.map((item, index) => (
        //                 <NavLink to={item.path} key={index} className="links" >
        //                     <div className="link_texts"> <p className='icons-class'>{item.icon}</p> <p style={{ paddingLeft: "16px" }}>{item.name}</p> </div>
        //                 </NavLink>
        //             ))
        //         }
        //         <hr />
        //         <div style={{ display: "flex", marginLeft: "90px", }}>
        //             <NavLink to="/settings" style={{ color: "black" }}>
        //                 <h4> <IoSettingsSharp style={{ marginLeft: "-5px", fontSize: "70px", width: "30px", marginTop: "-7px", color: "black" }} />  Setting </h4>
        //             </NavLink>
        //         </div>
        //     </div>

        //     <main className='mains'>

        //     </main>
        // </div>
        <div className="setting-container">
        <LabHeader/>
        <div className="setting-sidebar">
            <div className="setting-top_sections">
                <div className="setting-bars"></div>
            </div>
            <NavLink to="/dashboard" onClick={() => handleTabChange('dashboard')}>
                <div className="sidebar-link">
                    <BiSolidDashboard className="sidebar-icon" />
                    <h4>Dashboard</h4>
                </div>
            </NavLink>
            <NavLink to="/offeredtest" onClick={() => handleTabChange('labs')}>
                <div className="sidebar-link">
                    <LuTestTube className="sidebar-icon" />
                    <h4>Offer Test</h4>
                </div>
            </NavLink>
            <NavLink to="/orders" onClick={() => handleTabChange('users')}>
                <div className="sidebar-link">
                    <ImUsers className="sidebar-icon" />
                    <h4>Orders</h4>
                </div>
            </NavLink>
            <NavLink to="/adminCollections" onClick={() => handleTabChange('adminCollections')}>
                <div className="sidebar-link">
                    <BsCollection className="sidebar-icon" />
                    <h4>Collections</h4>
                </div>
            </NavLink>
            <NavLink to="/pages" onClick={() => handleTabChange('inbox')}>
                <div className="sidebar-link">
                    <TbMessage2Cancel className="sidebar-icon" />
                    <h4>Pages</h4>
                </div>
            </NavLink>
            <hr />
            <div className="sidebar-link">
                <HiOutlineClipboardDocumentList className="sidebar-icon" />
                <h4>Docs</h4>
            </div>
        </div>
        <main className='setting-main'>
            {/* Render component based on activeTab state */}
            
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'offeredtest' && <OfferedTest />}
            {activeTab === 'orders' && <Orders />}
            {activeTab === 'pages' && <Pages />}
           
        </main>
    </div>
    );
};

export default Sidebar;
import React, { useState } from 'react';
import { LuTestTube } from "react-icons/lu";
import { AiFillFileText } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { BsCollection } from "react-icons/bs";
import { TbMessage2Cancel } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import './settings.css';
import { NavLink } from 'react-router-dom';
import Overview from './Overview';
import Labs from './Labs';
import AdminCollections from './AdminCollections';
import AdminPages from './AdminPages';
//import Documents from './Documents';
import Users from './Users';
import Inbox from './Inbox';
import LabHeader from './../account/profile/LabHeader';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
    
        <div className="setting-container">
                <LabHeader/>
            <div className="setting-sidebar">
                <div className="setting-top_sections">
                    <div className="setting-bars">
                     
                    </div>
                </div>
                <NavLink to="/overview" onClick={() => handleTabChange('overview')}>
                    <div className="sidebar-link">
                        <BiSolidDashboard className="sidebar-icon" />
                        <h4>Overview</h4>
                    </div>
                </NavLink>
                <NavLink to="/labs" onClick={() => handleTabChange('labs')}>
                    <div className="sidebar-link">
                        <LuTestTube className="sidebar-icon" />
                        <h4>Labs</h4>
                    </div>
                </NavLink>
                <NavLink to="/users" onClick={() => handleTabChange('users')}>
                    <div className="sidebar-link">
                        <ImUsers className="sidebar-icon" />
                        <h4>Users</h4>
                    </div>
                </NavLink>
                <NavLink to="/adminCollections" onClick={() => handleTabChange('adminCollections')}>
                    <div className="sidebar-link">
                        <BsCollection className="sidebar-icon" />
                        <h4>Collections</h4>
                    </div>
                </NavLink>
                <NavLink to="/inbox" onClick={() => handleTabChange('inbox')}>
                    <div className="sidebar-link">
                        <TbMessage2Cancel className="sidebar-icon" />
                        <h4>Inbox</h4>
                    </div>
                </NavLink>
                <NavLink to="/home" onClick={() => handleTabChange('pages')}>
                    <div className="sidebar-link">
                        <AiFillFileText className="sidebar-icon" />
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
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'labs' && <Labs />}
                {activeTab === 'users' && <Users />}
                {activeTab === 'adminCollections' && <AdminCollections />}
                {activeTab === 'inbox' && <Inbox />}
                {activeTab === 'adminPages' && <AdminPages />}
            </main>
        </div>
    );
};

export default Settings;

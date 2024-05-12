import React, { useState, useEffect } from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { LuTestTube } from "react-icons/lu";
import { ImUsers } from "react-icons/im";
import { BsCollection } from "react-icons/bs";
import { TbMessage2Cancel } from "react-icons/tb";
import { AiFillFileText } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import './settings.css';
import { NavLink } from 'react-router-dom';
import Overview from './Overview';
import Labs from './Labs';
import AdminCollections from './AdminCollections';
import Users from './Users';
import Inbox from './Inbox';
import LabHeader from './../account/profile/LabHeader';
import OfferedTest from '../dashboard/OfferedTest';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        setActiveTab('overview');
    }, []);

    return (
        <div className="setting-container">
            <LabHeader/>
            <div className="setting-sidebar">
                <div className="setting-top_sections">
                    <div className="setting-bars"></div>
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
                <NavLink to="/offeredtest" onClick={() => handleTabChange('offeredtest')}>
                    <div className="sidebar-link">
                        <AiFillFileText className="sidebar-icon" />
                        <h4>Pages</h4>
                    </div>
                </NavLink>
                <NavLink to="/users" onClick={() => handleTabChange('users')}>
                    <div className="sidebar-link">
                        <AiFillFileText className="sidebar-icon" />
                        <h4>Users</h4>
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
               <p>helo</p>
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'labs' && <Labs />}
                {activeTab === 'users' && <Users />}
                {activeTab === 'adminCollections' && <AdminCollections />}
                {activeTab === 'inbox' && <Inbox />}
                {activeTab === 'users' && <Users/>}
            </main>
        </div>
    );
};

export default Settings;

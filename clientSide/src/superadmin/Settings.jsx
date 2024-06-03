<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
=======
import React, { useState, useEffect } from "react";
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
import { BiSolidDashboard } from "react-icons/bi";
import { BsCollection } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
<<<<<<< HEAD
import { ImUsers } from "react-icons/im";
import { LuTestTube } from "react-icons/lu";
import { TbMessage2Cancel } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import AdminCollections from "./AdminCollections";
import Inbox from "./Inbox";
import Labs from "./Labs";
import Overview from "./Overview";
import Users from "./Users";
import "./settings.css";
import axios from "axios";
import { ServerDomain } from "../constant/ServerDomain";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [packages, setPackages] = useState([]);
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    setActiveTab("overview");
    axios
    .get(`${ServerDomain}/info/getTopSellingInfos`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
      setPackages(response.data.package);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
 

 
=======
import "./settings.css";
import { NavLink } from "react-router-dom";
import Overview from "./Overview";
import Labs from "./Labs";
import AdminCollections from "./AdminCollections";
import Users from "./Users";
import Inbox from "./Inbox";
import LabHeader from "./../account/profile/LabHeader";
import OfferedTest from "../dashboard/OfferedTest";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    setActiveTab("overview");
  }, []);
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

  return (
    <div className="setting-container">
      <div className="setting-sidebar">
        <div className="setting-top_sections">
          <div className="setting-bars"></div>
<<<<<<< HEAD
        </div>
        <NavLink to="/overview" onClick={() => handleTabChange("overview")}>
          <div className="sidebar-link">
            <BiSolidDashboard className="sidebar-icon" />
            <h4>Overview</h4>
          </div>
        </NavLink>
        <NavLink to="/labs" onClick={() => handleTabChange("labs")}>
          <div className="sidebar-link">
            <LuTestTube className="sidebar-icon" />
            <h4>Labs</h4>
          </div>
        </NavLink>
        <NavLink to="/users" onClick={() => handleTabChange("users")}>
          <div className="sidebar-link">
            <ImUsers className="sidebar-icon" />
            <h4>Users</h4>
          </div>
        </NavLink>
        <NavLink
          to="/adminCollections"
          onClick={() => handleTabChange("adminCollections")}
        >
          <div className="sidebar-link">
            <BsCollection className="sidebar-icon" />
            <h4>Collections</h4>
          </div>
        </NavLink>
        <NavLink to="/inbox" onClick={() => handleTabChange("inbox")}>
          <div className="sidebar-link">
            <TbMessage2Cancel className="sidebar-icon" />
            <h4>Inbox</h4>
          </div>
        </NavLink>
        <NavLink
          to="/offeredtest"
          onClick={() => handleTabChange("offeredtest")}
        >
          <div className="sidebar-link">
            <AiFillFileText className="sidebar-icon" />
            <h4>Pages</h4>
          </div>
        </NavLink>
        <NavLink to="/users" onClick={() => handleTabChange("users")}>
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
=======
        </div>
        <NavLink to="/overview" onClick={() => handleTabChange("overview")}>
          <div className="sidebar-link">
            <BiSolidDashboard className="sidebar-icon" />
            <h4>Overview</h4>
          </div>
        </NavLink>
        <NavLink to="/labs" onClick={() => handleTabChange("labs")}>
          <div className="sidebar-link">
            <LuTestTube className="sidebar-icon" />
            <h4>Labs</h4>
          </div>
        </NavLink>
        <NavLink to="/users" onClick={() => handleTabChange("users")}>
          <div className="sidebar-link">
            <ImUsers className="sidebar-icon" />
            <h4>Users</h4>
          </div>
        </NavLink>
        <NavLink
          to="/adminCollections"
          onClick={() => handleTabChange("adminCollections")}
        >
          <div className="sidebar-link">
            <BsCollection className="sidebar-icon" />
            <h4>Collections</h4>
          </div>
        </NavLink>
        <NavLink to="/inbox" onClick={() => handleTabChange("inbox")}>
          <div className="sidebar-link">
            <TbMessage2Cancel className="sidebar-icon" />
            <h4>Inbox</h4>
          </div>
        </NavLink>
        <NavLink
          to="/offeredtest"
          onClick={() => handleTabChange("offeredtest")}
        >
          <div className="sidebar-link">
            <AiFillFileText className="sidebar-icon" />
            <h4>Pages</h4>
          </div>
        </NavLink>
        <NavLink to="/users" onClick={() => handleTabChange("users")}>
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
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
      </div>
      <main className="setting-main">
        {/* Render component based on activeTab state */}
       
        {activeTab === "overview" && <Overview />}
        {activeTab === "labs" && <Labs />}
        {activeTab === "users" && <Users />}
        {activeTab === "adminCollections" && <AdminCollections />}
        {activeTab === "inbox" && <Inbox />}
        {activeTab === "users" && <Users />}
      </main>
    </div>
  );
};

export default Settings;

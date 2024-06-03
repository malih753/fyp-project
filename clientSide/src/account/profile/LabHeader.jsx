import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';
import './labHeader.css';

const LabHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

     
};

export default LabHeader;

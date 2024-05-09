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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ backgroundColor: '#75DBD0' }}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="#" style={{ paddingLeft: '250px', color: '#75DBD0' }}>
                    LabEase
                </a>

                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>

                <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarSupportedContent">
                    <form className="d-flex">
                        <div className="input-group input-search"   >
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"

                            />
                            <button className="btn " type="submit"style={{backgroundColor:"#75dbd0", color:"white"}}  >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                   
                    <div className="d-flex flex-grow-1 justify-content-end" style={{color:"black"}}>
                               <Link to="/settings" className="me-2">
                                       <IoIosNotifications style={{fontSize:"25px", color:"black"}}  />
                                </Link>
                                <Link to="/settings" className="me-2">
                                       <RxDashboard style={{fontSize:"25px",color:"black"}}  />
                                </Link>
                                <Link to="/profile" className="me-2">
                                      <CgProfile  style={{fontSize:"25px",color:"black"}} />
                                </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default LabHeader;

import React, { useState } from 'react';
import ProfileHeader from '../account/profile/ProfileHeader';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { PiCircleThin } from "react-icons/pi";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

import img from './/../assets/1.png'
import './cart.css';

const Cart = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <ProfileHeader />
      <div className='cart-heading'>
        <div>
          <h2>Cart</h2>
        </div>
        <div className='stepper'>
          <p className='stepper-button'>
            <span> <IoCheckmarkCircleSharp style={{ fontSize: "35px", paddingTop: "15px", marginTop: "-20px", }} /> Select Test</span>
            <NavigateNextOutlinedIcon style={{ fontSize: "35px", paddingTop: "15px", cursor: "pointer" }} />
          </p>
          <p className='stepper-button'>
            <span><PiNumberCircleTwoFill style={{ fontSize: "35px", paddingTop: "15px", marginTop: "-20px", }} /> Booking</span>
            <NavigateNextOutlinedIcon style={{ fontSize: "35px", paddingTop: "15px", cursor: "pointer" }} />
          </p>
          <p className='stepper-button'>
            <span><PiNumberCircleThreeFill style={{ fontSize: "35px", paddingTop: "15px", marginTop: "-20px", }} /> Result</span>
          </p>
        </div>
      </div>
      <section className='main-d'>
        <div className="left-div">
          <div className='left-one'>
            <h3>Order Summary</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos ex aspernatur iure aut culpa impedit.
            </p>
          </div>
          <div className='left-two'>
            <div className='two-div-left'>
              <div>
                <img src={img} alt="img" style={{ width: "150px", height: "150px", borderRadius: "20px",marginTop:'10px' }} />
              </div>
              <div className='two-div-left-text'>
                <h5>Healthy 2024 Full Body Check up  <MdDelete style={{ paddingLeft: "5px", marginLeft: "20px", fontSize: "25px", cursor: "pointer" }} /></h5>
                <p style={{ color: "grey" }}>Lab: CITI Lab </p>
                <h5>PKR 1500.0</h5>
                <p style={{ boxShadow: " 0 4px 8px 0 rgba(5, 4, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px", width: "170px", height: "40px" }}> <MdOutlineWatchLater style={{ paddingRight: "2px", paddingLeft: "5px", fontSize: "25px", marginTop: "-3px" }} />Report in 15 hrs. </p>
              </div>

            </div>
          </div>
          <div className='left-three'>
            <h5>Sample Collection Type</h5>
            <div className={`visit-lab ${selectedOption === 'visitLab' ? 'selected' : ''}`} onClick={() => handleOptionClick('visitLab')} style={{ backgroundColor: selectedOption === 'visitLab' ? '#75DBD0' : '',color:selectedOption === 'visitLab'?'white':'' }} >
              <h5 > <FaWalking style={{ fontSize: "40px", cursor: "pointer", paddingBottom: "2px"}} /> Visit lab for sample collection <FaDotCircle style={{ paddingLeft: "5px", marginLeft: "110px", fontSize: "25px", cursor: "pointer" }} /> </h5>
              <p style={{ paddingLeft: "60px" }}> Lorem ipsum dolor dolor sit amet dolor sit amet.</p>
            </div>
            <div className={`home-service ${selectedOption === 'homeService' ? 'selected' : ''}`} onClick={() => handleOptionClick('homeService')} style={{ backgroundColor: selectedOption === 'homeService' ? '#75DBD0' : '',color:selectedOption === 'homeService'?'white':'' }}>
              <h5> <FaHome style={{ fontSize: "40px", cursor: "pointer", paddingBottom: '8px' }} /> Home collection By Professional <PiCircleThin style={{ paddingLeft: "5px", marginLeft: "100px", fontSize: "25px", cursor: "pointer" }} /> </h5>
              <p style={{ paddingLeft: "60px", paddingBottom: "20px" }}> Lorem ipsum dolor dolor sit amet dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div className='booking-details'>
            <h5>Booking Details</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ab.</p>
          </div>
          <form action="" className='form '>
            <div className='name'>
              <h5>Name</h5>
              <input type="text" placeholder="Enter Name" />
              <h5>Gender</h5>
              <select className='option' >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='number'>
              <h5>Age</h5>
              <input type="text" placeholder="Enter Age" />
              <h5>Phone No.</h5>
              <input type="text" placeholder="Enter Phone No." style={{ paddingBottom: "10px" }} />
            </div>
          </form>
          <div className='email'>
            <h5>Email</h5>
            <input type="text" placeholder="Enter email" />
          </div>

          {/* Address */}
          <h5 style={{ paddingLeft: "40px", paddingTop: "50px", fontWeight: "bold" }}>Address</h5>
          <form action="" className='address '>
            <div className='address-one'>
              <h5>Street</h5>
              <input type="text" placeholder="Enter street name" />
              <h5>City</h5>
              <input type="text" placeholder="Enter city name" />
            </div>
            <div className='address-one'>
              <h5>State</h5>
              <input type="text" placeholder="Enter your state name" />
              <h5>Country </h5>
              <input type="text" placeholder="Enter country name" style={{ paddingBottom: "10px" }} />
            </div>
          </form>
          <div className='address-two'>
            <h5>Zip</h5>
            <input type="text" placeholder="Enter zip code" />
          </div>
          { /* Additional Notes */}

          <h5 style={{ paddingLeft: "40px", paddingTop: "55px", fontWeight: "bold" }}>Additional Note</h5>
          <div className='additional'>
            <textarea name="" id="" cols="75" rows="100" style={{ resize: "none", border: "none", width: "650px", height: "50px" }}></textarea>
          </div>
          <div className='price'>
            <MDBListGroup style={{ minWidth: '20rem', marginRight: "20px", marginLeft: "20px", paddingRight: "20px" }} light small>
              <MDBListGroupItem style={{ minWidth: '20rem', marginRight: "20px", marginLeft: "20px", paddingRight: "20px" }} className="d-flex justify-content-between align-items-center">
                <span style={{ paddingLeft: "20px" }}>Total Price</span>
                <span >$100</span>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={{ minWidth: '20rem', marginRight: "20px", marginLeft: "20px", paddingRight: "20px", marginTop: "2px" }}>
                <span style={{ paddingLeft: "20px" }}>Subtotal</span>
                <span>$80</span>
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
          <div>
            <button className="btn btn-block" type="submit" style={{ width: "700px", marginTop: "10px", backgroundColor: "black", color: "white" }}>
              Place Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;

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
import axios from 'axios';
import img from './/../assets/1.png'
import './cart.css';
import DownloadPDFButton from '../pages/DownloadPdfBtn';

const Cart = () => {
  const [selectedOption, setSelectedOptions] = useState('');
  // const [gender, setGender] = useState('');
  // const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
  // const [zip, setZip] = useState('');
  // const [phone_no, setPhone] = useState('');
  // const [state, setState] = useState('');
  // const [country, setCountry] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // const [street, setStreet] = useState('');
  // const [city, setCity] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    phone_no: '',
    zip: '',
    state: '',
    street: '',
    country: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/info', formData);
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
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
                <img src={img} alt="img" style={{ width: "150px", height: "150px", borderRadius: "20px", marginTop: '10px' }} />
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
            <div className={`visit-lab ${selectedOption === 'visitLab' ? 'selected' : ''}`} onClick={() => handleOptionClick('visitLab')} style={{ backgroundColor: selectedOption === 'visitLab' ? '#75DBD0' : '', color: selectedOption === 'visitLab' ? 'white' : '' }} >
              <h5 > <FaWalking style={{ fontSize: "40px", cursor: "pointer", paddingBottom: "2px" }} /> Visit lab for sample collection <FaDotCircle style={{ paddingLeft: "5px", marginLeft: "110px", fontSize: "25px", cursor: "pointer" }} /> </h5>
              <p style={{ paddingLeft: "60px" }}> Lorem ipsum dolor dolor sit amet dolor sit amet.</p>
            </div>
            <div className={`home-service ${selectedOption === 'homeService' ? 'selected' : ''}`} onClick={() => handleOptionClick('homeService')} style={{ backgroundColor: selectedOption === 'homeService' ? '#75DBD0' : '', color: selectedOption === 'homeService' ? 'white' : '' }}>
              <h5> <FaHome style={{ fontSize: "40px", cursor: "pointer", paddingBottom: '8px' }} /> Home collection By Professional <PiCircleThin style={{ paddingLeft: "5px", marginLeft: "100px", fontSize: "25px", cursor: "pointer" }} /> </h5>
              <p style={{ paddingLeft: "60px", paddingBottom: "20px" }}> Lorem ipsum dolor dolor sit amet dolor sit amet.</p>
            </div>
          </div>
          <DownloadPDFButton/>
        </div>
        <div className="right-div">
          <div className='booking-details'>
            <h5>Booking Details</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ab.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
            <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <button type="submit">Submit</button>
          </form>

        </div>
      </section>
    </div>

  );
}

export default Cart;
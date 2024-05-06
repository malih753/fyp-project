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

const Cart = () => {

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
      const response =await axios.post('http://localhost:4000/api/v1/info', formData);
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }

  };

 
  return (
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
  );
}

export default Cart;

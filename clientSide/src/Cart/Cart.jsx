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
<<<<<<< HEAD
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
=======
 
  // const [selectedOption, setSelectedOption] = useState('');
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [genderOptions, setGenderOptions] = useState(["male", "female", "other"])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  // const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [zip, setZip] = useState('')
 

  const handleGender =(e)=>{
    e.preventDefault()
    setGenderOptions(e.target.value)
  }
 


  const handleSubmit = async (e,req,res) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('info data');
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915
    try {
      const response = await axios.post('http://localhost:4000/api/v1/info', formData);
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };
<<<<<<< HEAD

  // const handleGender = (e) => {
  //   e.preventDefault()
  //   setGender(e.target.value)
  // }
=======
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
 
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915
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
        </div>
        <div className="right-div">
          <div className='booking-details'>
            <h5>Booking Details</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ab.</p>
          </div>
<<<<<<< HEAD
          <form className='form' onSubmit={handleSubmit}>
            <div className='name'>
              <h5>Name</h5>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
              <h5>Gender</h5>
              
              <select id="gender" value={gender} onChange={handleGender}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
=======
          <form action="submit" className='form ' >
            <div className='name'>
              <h5>Name</h5>
              <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
              <h5>Gender</h5>
              <select className='option' value={genderOptions} onClick={handleGender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915
              </select>
            </div>
            <div className='number'>
              <h5>Age</h5>
<<<<<<< HEAD
              <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
              <h5>Phone No.</h5>
              <input type="text" value={phone_no} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone No." style={{ paddingBottom: "10px" }} />
=======
              <input type="text" placeholder="Enter Age" value={ age} onChange={(e) => setAge(e.target.value)}/>
              <h5>Phone No.</h5>
              <input type="text" placeholder="Enter Phone No." style={{ paddingBottom: "10px" }} value={phone} onChange={(e) => setPhone(e.target.value)}/>
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915
            </div>
          <div className='email'>
            <h5>Email</h5>
<<<<<<< HEAD
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
=======
            <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915
          </div>

          {/* Address */}
          <h5 style={{ paddingLeft: "40px", paddingTop: "50px", fontWeight: "bold" }}>Address</h5>

            <div className='address-one'>
              <h5>Street</h5>
<<<<<<< HEAD
              <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Enter street name" />
              <h5>Address</h5>
              <input type="text" value={address}  onChange={(e) => setAddress(e.target.value)} placeholder="Enter street name" />
              <h5>City</h5>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
            </div>
            <div className='address-one'>
              <h5>State</h5>
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter your state name" />
              <h5>Country </h5>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter country name" style={{ paddingBottom: "10px" }} />
            </div>
          <div className='address-two'>
            <h5>Zip</h5>
            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Enter zip code" />
=======
              <input type="text" placeholder="Enter street name" value={street} onChange={(e) => setStreet(e.target.value)}/>
              <h5>City</h5>
              <input type="text" placeholder="Enter city name" value={city} onChange={(e) =>setCity(e.target.value)}/>
            </div>
            <div className='address-one'>
              <h5>State</h5>
              <input type="text" placeholder="Enter your state name" value={state} onChange={(e) =>setState(e.target.value)}/>
              <h5>Country </h5>
              <input type="text" placeholder="Enter country name" style={{ paddingBottom: "10px" }} value={country} onChange={(e) => setCountry(e.target.value)}/>
            </div>
          </form>
          <div className='address-two'>
            <h5>Zip</h5>
            <input type="text" placeholder="Enter zip code" value={zip} onChange={(e) =>  setZip(e.target.value)}/>
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915
          </div>
          { /* Additional Notes */}

          <h5 style={{ paddingLeft: "40px", paddingTop: "55px", fontWeight: "bold" }}>Additional Note</h5>
          <div className='additional'>
            <textarea  id="" cols="75" rows="100" style={{ resize: "none", border: "none", width: "650px", height: "50px" }}></textarea>
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
          </form>
       
        </div>
      </section>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
    //   <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
    //   <select name="gender" value={formData.gender} onChange={handleChange}>
    //     <option value="">Select gender</option>
    //     <option value="male">Male</option>
    //     <option value="female">Female</option>
    //     <option value="other">Other</option>
    //   </select>
    //   <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
    //   <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
    //   <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="Phone Number" />
    //   <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" />
    //   <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
    //   <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" />
    //   <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
    //   <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default Cart;

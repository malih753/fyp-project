<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import ProfileHeader from "../account/profile/ProfileHeader";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
=======
import React, { useEffect, useState } from 'react';
import ProfileHeader from '../account/profile/ProfileHeader';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { PiCircleThin } from "react-icons/pi";
<<<<<<< HEAD
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import axios from "axios";
import img from ".//../assets/1.png";
import "./cart.css";
import DownloadPDFButton from "../pages/DownloadPdfBtn";
import { useParams } from "react-router-dom";
import { packages } from "../constant/constant";
import { Stack, TextareaAutosize } from "@mui/material";
import { ServerDomain } from "../constant/ServerDomain";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const [selectedOption, setSelectedOptions] = useState("");
=======
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import img from './/../assets/1.png'
import './cart.css';
import DownloadPDFButton from '../pages/DownloadPdfBtn';
import { useParams } from 'react-router-dom';
import { packages } from '../constant/constant';
import { Stack } from '@mui/material';

const Cart = () => {
  const [selectedOption, setSelectedOptions] = useState('');
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
  const params = useParams();
  const { name } = params;
  const [details, setDetails] = useState({});
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    name: "",
    age: "",
    gender: "",
    address: "",
    city: "",
    phone_no: "",
    zip: "",
    state: "",
    street: "",
    country: "",
    email: "",
    package_name: details.title,
    price: details.price,
    message: "",
=======
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
    email: '',
    package_name: details.title,
    price: details.price
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const detail = packages.find((item) => item.title === name);
    setDetails(detail);
    setFormData({
      ...formData,
      package_name: detail?.title,
<<<<<<< HEAD
      price: detail?.price.split(" ").pop(),
    });
    
=======
      price: detail?.price
    });
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      const stripe = await loadStripe(
        "pk_test_51PMkU3LgMxqDuqbXTeyyEZrfCENhuLd2rIR1q15NBPYnwyBRBJ9M5xyZfDHd7mMUafaMb9GyhQGvPobvTiHrNpS100u84UT71V"
      );

      const body = {
        product: formData,
      };

      const response = await axios.post(
        `${ServerDomain}/info/create-info`,
        {product:formData},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const session = response;

      console.log(session);

      const result = stripe.redirectToCheckout({
        sessionId: session?.data?.id,
=======
      const response = await axios.post('http://localhost:5000/api/v1/info/create-info', formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
      });

     console.log(result);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
<<<<<<< HEAD
      <div className="cart-heading">
        <h4 style={{ paddingLeft: "210px" }}>Cart</h4>

        <div className="stepper">
          <p className="stepper-button">
            <span>
              {" "}
              <IoCheckmarkCircleSharp
                style={{
                  fontSize: "35px",
                  paddingTop: "15px",
                  marginTop: "-20px",
                }}
              />{" "}
              Select Test
            </span>
            <NavigateNextOutlinedIcon
              style={{
                fontSize: "35px",
                paddingTop: "15px",
                cursor: "pointer",
              }}
            />
=======

      <div className='cart-heading'>

        <h4 style={{ paddingLeft: "210px" }}>Cart</h4>

        <div className='stepper'>
          <p className='stepper-button'>
            <span> <IoCheckmarkCircleSharp style={{ fontSize: "35px", paddingTop: "15px", marginTop: "-20px", }} /> Select Test</span>
            <NavigateNextOutlinedIcon style={{ fontSize: "35px", paddingTop: "15px", cursor: "pointer" }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
          </p>
          <p className="stepper-button">
            <span>
              <PiNumberCircleTwoFill
                style={{
                  fontSize: "35px",
                  paddingTop: "15px",
                  marginTop: "-20px",
                }}
              />{" "}
              Booking
            </span>
            <NavigateNextOutlinedIcon
              style={{
                fontSize: "35px",
                paddingTop: "15px",
                cursor: "pointer",
              }}
            />
          </p>
          <p className="stepper-button">
            <span>
              <PiNumberCircleThreeFill
                style={{
                  fontSize: "35px",
                  paddingTop: "15px",
                  marginTop: "-20px",
                }}
              />{" "}
              Result
            </span>
          </p>
        </div>
      </div>
<<<<<<< HEAD
      <section className="main-d">
        <div className="left-div">
          <div className="left-one">
=======
      <section className='main-d'>
        <div className='left-div'>
          <div className='left-one'>
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
            <h3>Order Summary</h3>
            <p>
              Thank you for your order! Below is a summary of your test bookings
              and details - please add your details and confirm for a seamless
              experience
            </p>
          </div>
          <div className="left-two">
            <div className="two-div-left">
              <div>
<<<<<<< HEAD
                <img
                  src={img}
                  alt="img"
                  style={{
                    width: "126px",
                    height: "129px",
                    borderRadius: "95px",
                    marginTop: "30px",
                  }}
                />
              </div>
              <div className="two-div-left-text">
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <h5>Healthy 2024 Full Body Check up </h5>
                  <MdDelete
                    style={{
                      paddingLeft: "5px",
                      marginLeft: "20px",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  />
=======
                <img src={img} alt="img" style={{ width: "126px", height: "129px", borderRadius: "95px", marginTop: '30px' }} />
              </div>
              <div className='two-div-left-text'>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <h5>Healthy 2024 Full Body Check up </h5>
                  <MdDelete style={{ paddingLeft: "5px", marginLeft: "20px", fontSize: "25px", cursor: "pointer" }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
                </Stack>

                <p style={{ color: "grey" }}>Lab: CITI Lab </p>
                <h5>PKR 1500.0</h5>
<<<<<<< HEAD
                <p
                  style={{
                    boxShadow:
                      " 0 4px 8px 0 rgba(5, 4, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "10px",
                    width: "170px",
                    padding: "9px",
                  }}
                >
                  {" "}
                  <MdOutlineWatchLater
                    style={{
                      paddingRight: "2px",
                      fontSize: "25px",
                      marginTop: "-3px",
                    }}
                  />
                  Report in 15 hrs.{" "}
                </p>
=======
                <p style={{ boxShadow: " 0 4px 8px 0 rgba(5, 4, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px", width: "170px", padding: "9px" }}> <MdOutlineWatchLater style={{ paddingRight: "2px", fontSize: "25px", marginTop: "-3px" }} />Report in 15 hrs. </p>
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              </div>
            </div>
          </div>
          <div className="left-three">
            <h5>Sample Collection Type</h5>
<<<<<<< HEAD
            <div
              className={`visit-lab ${
                selectedOption === "visitLab" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("visitLab")}
              style={{
                backgroundColor: selectedOption === "visitLab" ? "#75DBD0" : "",
                color: selectedOption === "visitLab" ? "white" : "",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <FaWalking
                  style={{
                    fontSize: "31px",
                    cursor: "pointer",
                    paddingBottom: "8px",
                  }}
                />
                <h5 style={{ fontSize: "18px", textAlign: "center", flex: 1 }}>
                  {" "}
                  Visit lab for sample collection{" "}
                </h5>
                <FaDotCircle
                  style={{
                    paddingLeft: "5px",
                    marginLeft: "110px",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </div>

              <p style={{ paddingLeft: "60px" }}>
                {" "}
                Lorem ipsum dolor dolor sit amet dolor sit amet.
              </p>
            </div>
            <div
              className={`home-service ${
                selectedOption === "homeService" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("homeService")}
              style={{
                backgroundColor:
                  selectedOption === "homeService" ? "#75DBD0" : "",
                color: selectedOption === "homeService" ? "white" : "",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <FaHome
                  style={{
                    fontSize: "27px",
                    cursor: "pointer",
                    paddingBottom: "8px",
                  }}
                />
                <h5 style={{ fontSize: "18px", textAlign: "center", flex: 1 }}>
                  {" "}
                  Home collection By Professional
                </h5>
                <PiCircleThin
                  style={{
                    paddingLeft: "5px",
                    marginLeft: "110px",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <p style={{ paddingLeft: "60px" }}>
                {" "}
                Lorem ipsum dolor dolor sit amet dolor sit amet.
              </p>
=======
            <div className={`visit-lab ${selectedOption === 'visitLab' ? 'selected' : ''}`} onClick={() => handleOptionClick('visitLab')} style={{ backgroundColor: selectedOption === 'visitLab' ? '#75DBD0' : '', color: selectedOption === 'visitLab' ? 'white' : '' }} >

              <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}>
                <FaWalking style={{ fontSize: "31px", cursor: "pointer", paddingBottom: '8px' }} />
                <h5 style={{ fontSize: '18px', textAlign: 'center', flex: 1 }}> Visit lab for sample collection </h5>
                <FaDotCircle style={{ paddingLeft: "5px", marginLeft: "110px", fontSize: "25px", cursor: "pointer" }} />
              </div>

              <p style={{ paddingLeft: "60px" }}> Lorem ipsum dolor dolor sit amet dolor sit amet.</p>
            </div>
            <div className={`home-service ${selectedOption === 'homeService' ? 'selected' : ''}`} onClick={() => handleOptionClick('homeService')} style={{ backgroundColor: selectedOption === 'homeService' ? '#75DBD0' : '', color: selectedOption === 'homeService' ? 'white' : '' }}>

              <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}>
                <FaHome style={{ fontSize: "27px", cursor: "pointer", paddingBottom: '8px' }} />
                <h5 style={{ fontSize: '18px', textAlign: 'center', flex: 1 }}> Home collection By Professional</h5>
                <PiCircleThin style={{ paddingLeft: "5px", marginLeft: "110px", fontSize: "25px", cursor: "pointer" }} />
              </div>
              <p style={{ paddingLeft: "60px"}}> Lorem ipsum dolor dolor sit amet dolor sit amet.</p>
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
            </div>
          </div>
          <DownloadPDFButton />
        </div>
        <div className="right-div">
          <div className="booking-details">
            <h5>Booking Details</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              ab.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              <div>
<<<<<<< HEAD
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Name{" "}
                </span>
                <br></br>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Age{" "}
                </span>
                <br></br>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
=======
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Name </span><br></br>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
              <div>
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Age </span><br></br>
                <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              </div>
            </div>
            <div>
              <span
                style={{
                  color: "#75dbd0",
                  marginLeft: 9,
                  fontWeight: "bold",
                  marginLeft: 110,
                }}
              >
                Select Gender
              </span>
              <br></br>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{
                  marginLeft: 80,
                  width: 540,
                  height: 40,
                  marginBottom: 30,
                  borderColor: "white",
                  padding: 9,
                  borderRadius: 10,
                }}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              <div>
<<<<<<< HEAD
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Address
                </span>
                <br></br>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  City
                </span>
                <br></br>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
=======
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Address</span><br></br>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
              <div>
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>City</span><br></br>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              <div>
<<<<<<< HEAD
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Phone No
                </span>
                <br></br>
                <input
                  type="text"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Zip Code
                </span>
                <br></br>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
=======
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Phone No</span><br></br>
                <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="Phone Number" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
              <div>
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Zip Code</span><br></br>
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              <div>
<<<<<<< HEAD
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  State
                </span>
                <br></br>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Street
                </span>
                <br></br>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Street"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
=======
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>State</span><br></br>
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
              <div>
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Street</span><br></br>
                <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              <div>
<<<<<<< HEAD
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Country
                </span>
                <br></br>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Email
                </span>
                <br></br>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
            </div>
            <div
              style={{
                marginLeft: "70px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  color: "#75dbd0",
                  marginLeft: 9,
                  fontWeight: "bold",
                }}
              >
                Message
              </span>
              <br></br>
              <TextareaAutosize
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Meessage"
                style={{
                  padding: 4,
                  borderColor: "white",
                  borderRadius: 5,
                  minHeight: "100px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Package name:
                </span>
                <br></br>
                <input
                  type="text"
                  name="email"
                  value={details?.title}
                  disabled
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "#75dbd0",
                    marginLeft: 9,
                    fontWeight: "bold",
                  }}
                >
                  Price:
                </span>
                <br></br>
                <input
                  type="text"
                  name="email"
                  value={details?.price}
                  disabled
                  style={{ padding: 4, borderColor: "white", borderRadius: 5 }}
                />
=======
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Country</span><br></br>
                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
              <div >
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Email</span><br></br>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              </div>

            </div>
<<<<<<< HEAD
=======
            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 30 }}>
              <div>
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Package name:</span><br></br>
                <input type="text" name="email" value={details?.title} disabled style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
              <div>
                <span style={{ color: '#75dbd0', marginLeft: 9, fontWeight: 'bold' }}>Price:</span><br></br>
                <input type="text" name="email" value={details?.price} disabled style={{ padding: 4, borderColor: 'white', borderRadius: 5 }} />
              </div>
            </div>

            <button type="submit" style={{
              width: 540, marginLeft: 110, backgroundColor: '#75dbd0', borderColor: 'white', padding: 10, borderRadius: 50, marginTop: 40
            }}>Submit</button>
          </form>
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

            <button
              type="submit"
              style={{
                width: 540,
                backgroundColor: "#75dbd0",
                borderColor: "white",
                padding: 10,
                borderRadius: 50,
                marginTop: 40,
                marginLeft: 70,
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Cart;

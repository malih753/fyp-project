import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom";

import './register.css';
import { ServerDomain } from '../constant/ServerDomain';

const Register = () => {
  // State variables to store form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('we are on register') // Prevent default form submission behavior

    try {
      // Make API request to sign up endpoint
      const payloadData={
        firstName,
        lastName,
        email,
        password
      }
      const response = await axios.post(`${ServerDomain}/auth/signUp`, payloadData);

      console.log(response.data); 
      // Log response data
      // You can handle success response here, such as redirecting to another page or showing a success message
      if(response.data){
          navigation("/login");
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // You can handle error response here, such as displaying an error message to the user
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight">
              The Best Lab Test <br />
              <span>Offer You Can Avail</span>
            </h1>
            <p className="mb-4 opacity-70 justify-content-center">
            Welcome to LABEASE, the ultimate hub for laboratories! By registering with us, you'll gain access to a seamless and efficient platform that streamlines your workflow, enhances collaboration, and amplifies your impact. Our platform offers a range of features, including easy test management, real-time results tracking, and secure data storage. Join our community of laboratories and start optimizing your operations today. Register now and take the first step towards a more connected and productive future
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleSubmit}> {/* Add onSubmit event handler */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" style={{ background: "#f4f5f7" }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example1">First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" style={{ background: "#f4f5f7" }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example2">Last Name</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" style={{ background: "#f4f5f7" }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example3">Email Address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" style={{ background: "#f4f5f7" }} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4" style={{ backgroundColor: "#75DBD0", marginLeft: "-3px" }} >
                    Sign Up
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

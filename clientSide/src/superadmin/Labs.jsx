import React, { useEffect, useState } from 'react'
import './labs.css';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

const Labs = () => {
  const [allUser, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/getNewUser/getAdminUsers', {

      withCredentials: true
    }).then((response) => {
      setAllUsers(response?.data?.newUsers)
    }).catch((e) => {
      console.log(e)
    })

  }, [])
  return (
    <div>
      <div className='lab-main'>
        <div className='lab-heading'>
          <h3>Lab</h3>
          <p>
            Manage all existing labs.
          </p>
        </div>
        <div className='lab-btn'>
          <Link to='/addUser' >
            <MDBBtn color="primary" size="lg" >
              Add new Lab
            </MDBBtn>
          </Link>
        </div>
      </div>


      {
        allUser.map((user,i) => {
          return (
            <div className='lab-action' key={i}>

              <div className='lab-action-one' >
                <p>Email</p>
                <p>Name</p>
                <p>Test Name</p>
                <p>Edit</p>
                <p>Delete</p>
              </div>
              <div className='lab-action-two' >
                <p>{user.email}</p>
                <p>{user.firstname}</p>
                <p>adential package</p>
                <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display: "flex", color: "white", marginTop: "20px" }}>Edit</MDBBtn></Link>
                <Link to="/delete">  <MDBBtn style={{ backgroundColor: '#75DBD0', display: "flex", color: "white", marginTop: "20px" }}>Delete</MDBBtn></Link>

              </div>
            </div>
          )
        })
      }
    </div>

  )
}

export default Labs

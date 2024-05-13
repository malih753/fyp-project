import React, { useEffect, useState } from 'react'
import './users.css';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
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
      <div className='user-main'>
        <div className='user-heading'>
          <h3>Users </h3>
          <p>
            Manage all existing users or add new one.
          </p>
        </div>
        <div className='user-btn'>
          <Link to='/addUser' >
            <MDBBtn color="primary" size="lg" >
              Add new user
            </MDBBtn>
          </Link>
        </div>
      </div>


      <div className='user-action' >
        <div className='user-action-one' >
          <p>Name</p>
          <p>Role</p>
          <p>Email</p>

          <p>Action</p>


        </div>
        <div className='user-action-two' >

          <p>Ali khan</p>
          <p>Admin</p>
          <p>qwe@gmail.com</p>

          <div style={{ display: "flex" }}>
            <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display: "flex", color: "white", marginTop: "10px", marginRight: "20px" }}>Edit</MDBBtn></Link>
            <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display: "flex", color: "white", marginTop: "10px", marginRight: "20px" }}>Delete</MDBBtn></Link>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Users

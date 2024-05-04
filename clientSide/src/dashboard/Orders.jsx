import React from 'react'
import './orders.css';
import LabHeader from '../account/profile/LabHeader';
import Sidebar from './../dashboard/Sidebar';
import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <div style={{display:"flex"}}>
    <LabHeader/>
    <Sidebar/>

           <div className='orders-main'>
             <div className='order-heading'> 
                <h3>Orders</h3>
                <p> 
                 Manage all existing orders.
                </p>
             </div>
             <div className='order-table'>
             <div className='test-details'> 
             <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius:"10px", marginTop:"5px", paddingTop:"15px" }}>
                  <p>ID</p>
                  <p>Booking </p>
                  <p>Type </p>
                  <p>Status </p>
                  <p>Payment status </p>
                  <p>Patient name </p>
                  <p>Order Date/Time </p>
                  <p>Order price </p>
                  <p>Sample collection </p>
                  <p>Action </p>
          </div>
        </div>
             </div>
             <button style={{marginLeft:"10px", marginTop:"10px", backgroundColor:"#75D0B0", color:"white", border:"none", borderRadius:"5px", padding:"5px", width:"100px"}}>
              <Link to="/edit" style={{textDecoration:"none", color:"white"}}>Edit</Link>
             </button>
           </div>
         
 </div>
 
  )
}

export default Orders


/*
import React from 'react'
import './offeredTest.css';
import LabHeader from '../account/profile/LabHeader';
import Sidebar from './Sidebar';

const OfferedTest = () => {
  return (
    <div>
       <LabHeader/>
              <div className='offeredtest-main'>
               
              <h2>Offered Test</h2>
              </div>
    </div>
    
  )
}

export default OfferedTest

*/
 
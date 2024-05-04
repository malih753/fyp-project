import React from 'react'
import './labs.css';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const Labs = () => {
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
             <Link to='/' >
                    <MDBBtn color="primary" size="lg" >
                        Add new Lab 
                    </MDBBtn>
                </Link>
             </div>
         </div>


         <div className='lab-action' > 
             <div  className='lab-action-one' >
              <p>ID</p>
              <p>Name</p>
              <p>Action</p>
             </div>
             <div  className='lab-action-two' >
             <p>12345678</p>
              <p>Ali Niaz</p>
            <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"20px"}}>Edit</MDBBtn></Link>
             </div>
        </div>
    </div>
    
  )
}

export default Labs

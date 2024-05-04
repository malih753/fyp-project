import React from 'react'
import './adminCollection.css';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const AdminCollection = () => {
  return (
    <div>
         <div className='collection-main'>
           <div className='collection-heading'> 
                <h3> Collections </h3>
                <p> 
                 Manage all existing collection or add new one.
                </p>
             </div>
             <div className='collection-btn'>
             <Link to='/addCollections' >
                    <MDBBtn color="primary" size="lg"  style={{backgroundColor:"#75dbd0", color:"white"}}>
                        Add new collection 
                    </MDBBtn>
                </Link>
             </div>
         </div>


         <div className='collection-action' > 
             <div  className='collection-action-one' >
              <p>ID</p>
              <p>Name</p>
              <p>Active</p>
              <p>Image</p>    
              <p>Action</p>  
              </div>
            
             <div  className='collection-action-two' >
                    <p>123456789 </p>
                    <p>Ali khan</p>
                    <p>Yes</p>
                    <p> awierusc jxksjdiuraskld jfuioASD H</p>   
                <div style={{display:"flex"}}>
                    <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px", marginRight:"20px"}}>Edit</MDBBtn></Link>
                    <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px", marginRight:"20px"}}>Delete</MDBBtn></Link>
                 </div>
            </div>
    </div>
    </div>
    
  )
}

export default AdminCollection

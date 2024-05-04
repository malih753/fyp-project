import React from 'react'
import './users.css';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const Users = () => {
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
             <div  className='user-action-one' >
              <p>ID</p>
              <p>Name</p>
              <p>Role</p>
              <p>Email</p>
              <p>Owned Lab</p>
              <p>Created at</p>
              <p>Modified at</p>
              <div style={{display:"flex"}}>
              <p>Action</p>
              {/*These p having only consider for arrangements not for purpose execptionly. */}
              <p>       </p>  
              <p>       </p>
              <p>       </p>
              <p>      </p>
              </div>
             </div>
             <div  className='user-action-two' >
              <p>123456789 </p>
              <p>Ali khan</p>
              <p>Admin</p>
              <p>qwe@gmail.com</p>
              <p>CITI Lab</p>
              <p>Created at</p>
              <p>Modified at</p>
              <div style={{display:"flex"}}>
                 <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px", marginRight:"20px"}}>Edit</MDBBtn></Link>
                 <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px", marginRight:"20px"}}>Delete</MDBBtn></Link>
              </div>
            </div>
            <div  className='user-action-two' >
              <p>098765432 </p>
              <p>Azhar Ahmad khan</p>
              <p>User</p>
              <p>asd@gmail.com</p>
              <p>Chughtai Lab</p>
              <p>Created at</p>
              <p>Modified at</p>
              <div style={{display:"flex"}}>
                 <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px",marginRight:"20px"}}>Edit</MDBBtn></Link>
                 <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px",marginRight:"20px"}}>Delete</MDBBtn></Link>
              </div>
            </div>
            <div  className='user-action-two' >
              <p>765435678654 </p>
              <p>Khizar</p>
              <p>Lab</p>
              <p>asd@gmail.com</p>
              <p>Chughtai Lab</p>
              <p>Created at</p>
              <p>Modified at</p>
              <div style={{display:"flex"}}>
                 <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px",marginRight:"20px"}}>Edit</MDBBtn></Link>
                 <Link to="/edit">  <MDBBtn style={{ backgroundColor: '#75DBD0', display:"flex", color:"white", marginTop:"10px",marginRight:"20px"}}>Delete</MDBBtn></Link>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default Users

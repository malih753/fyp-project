import React from 'react'
import './inbox.css';

import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const Inbox = () => {
  return (
    <div>
       <div className='msg-main'>
           <div className='lab-heading'> 
                <h3> Support Messages </h3>
                <p> 
                 Manage all support message or queries submitted through contact form .
                </p>
             </div>
             <div className='msg-btn'>
             <Link to='#!' >
                    <MDBBtn color="primary" size="lg" >
                        Refresh  
                    </MDBBtn>
                </Link>
             </div>
         </div>
    </div>
  )
}

export default Inbox

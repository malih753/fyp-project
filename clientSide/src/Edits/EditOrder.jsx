import { useState } from 'react';
import LabHeader from '../account/profile/LabHeader';
import Sidebar from '../dashboard/Sidebar';
import { MdOutlineTaskAlt } from "react-icons/md";
import { FiFilePlus } from "react-icons/fi";
import lightbox5 from '../assets/lightbox5.jpg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { GoPlus } from "react-icons/go";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import '.././account/profile/profileorders.css';
import Switch from '@mui/material/Switch';
import './editOrder.css';

const EditOrder = () => {
  const [testingStartChecked, setTestingStartChecked] = useState(true);
  const [testingEndChecked, setTestingEndChecked] = useState(true);
  const [file, setFile] = useState(null);

  const handleTestingStartChange = (event) => {
    setTestingStartChecked(event.target.checked);
  };

  const handleTestingEndChange = (event) => {
    setTestingEndChecked(event.target.checked);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div style={{display:"flex"}}>
      <LabHeader/>
      <Sidebar/>
       <div className='main-editpage'>
        
        {/* Right/center side */}
           <div className="edit-right">
             <div className='order-status'>
                <div className='complete-icon'> <p style={{backgroundColor:"green", border:"none", borderRadius:"25px", color:"black", width:"104px", height:"30px", paddingTop:"2px"}} > <MdOutlineTaskAlt  /> Complete  </p> 
                 <p style={{backgroundColor:"grey", border:"none", borderRadius:"25px", color:"black", width:"104px", height:"30px", paddingTop:"2px", marginLeft:"10px"}}> <FiFilePlus/> Pakages  </p>
            </div>
               <div className='center-card'>  
                    <div style={{}}>
                       <img src={lightbox5} alt="img" width={"200px"} style={{ paddingTop:"10px", borderRadius:"10px"}} /> 
                    </div>
                    <div className='center-txt'> 
                        <h3 >Healthy 2023 Full Body Checkup</h3> 
                            <p>15500.0 PKR</p>
                            <h5>Lab: CITI Lab</h5> 
                    </div>
                   <div>
                   <p>  <ArrowOutwardIcon/>  </p>
                   </div>
             </div>
              <div className='status-btn'>
                <button> <GoPlus style={{paddingTop:"5px", fontSize:"5px"}} /> Update Order status <ExpandMoreIcon style={{paddingTop:"5px", fontSize:"25px"}} /> </button>
              </div>
             </div>

              <div className='payment-status'>
                <div className='payment-icon'>
                  <p style={{backgroundColor:"green", border:"none", borderRadius:"25px", color:"black", width:"70px", height:"30px", paddingTop:"2px"}} > <MdOutlineTaskAlt  /> Paid  </p> 
              </div>
                 <div className='payment-subtotal'>
                  <ul>
                    <li>Sub total</li>
                    <li>Discount</li>
                   <strong> <li>Total</li></strong>
                    <li>Paid by </li>
                   
                  </ul>
                  <ul>
                    <li>1 item</li>
                    <li>None</li>
                    <li>  </li>
                    <li>  </li>
                  </ul>
                  <ul style={{marginLeft:"130px"}}>
                    <li>PKR 15000.0</li>
                    <li>-PKR 15000.0</li>
                    <strong><li>PKR 15000.0</li></strong>
                    <li> PKR 0.00000</li>
                  </ul>
                 </div>
                 <div className='payment-status-btn'>
                    <button> <GoPlus style={{paddingTop:"5px", fontSize:"25px" }} /> Update Payment status <ExpandMoreIcon style={{paddingTop:"5px", fontSize:"25px"}} /> </button>
                 </div>
             </div>

             <div className='orders'> 
             <div className='order-test-details'>
                  <p>Order ID</p>
                  <p>Order Date/Time </p>
                  <p>Payment ID </p>
                  <p>Payment method </p>
                  <p>Completion Date/Time </p>
           </div>
           <div className='order-test-details-out'>
                  <p>1234556712345</p>
                  <p>Sun, 02-04-204 </p>
                  <p>N/A </p>
                  <p>Cash </p>
                  <p>20-03-2024 </p>
           </div>
             </div>
             
             <div className='sample-collection'>
                <div className='collection-type'>
                   <p>Sample Collection Type</p>
                   <p>Sample Collection Date</p>
                   
                </div>
                <div className='collection-btn'>
                     <button> <GoPlus style={{paddingTop:"5px", fontSize:"25px" }} /> Update sample collection type <ExpandMoreIcon style={{paddingTop:"5px", fontSize:"25px"}} /> </button>
                 </div>
             </div>
             <div className='collection-details'>
                  <div className='collection-details-title'>    
                    <p>Testing Start</p>
                    <p>Testing End</p>
                    <p>Report Generated on</p>
                    <p> Completion Date/Time</p>
                  </div>
                 
                  <div className='collection-details-out'>
                    <p>13-04-2024, 11:00 am</p>
                    <p>13-04-2024, 12:00 am</p>
                    <p>13-04-2024, 12:00 pm</p>
                    <p>13-04-2024, 04:00 pm</p>
                  </div>
                  <div className='collection-details-btn'>
                      <div> Testing Start <Switch label="Testing start" style={{ color: "#75D0A0", marginRight: "20px", width:"40px"}} checked={testingStartChecked} onChange={handleTestingStartChange} inputProps={{ 'aria-label': 'controlled' }} /></div>
                      <div>Testing End  <Switch label="Testing end" style={{ color: "#75D0A0", marginRight: "20px", width:"40px"}} checked={testingEndChecked} onChange={handleTestingEndChange} inputProps={{ 'aria-label': 'controlled' }} /> </div>
                  </div>
             </div>
             <div className='report-file-upload'>
                  <div style={{paddingTop:"30px", marginLeft:"40px"}}>
                  <h5>Upload Report File</h5>
                  <input type="file" onChange={handleFileChange} style={{paddingLeft:"30px", paddingTop:"10px"}} />
                  <br />
                  <br />
                  <p>Drag and drop file to upload  the report file</p>
                  </div>
             </div>

          
           </div>


           {/* Left side */}
           <div className="edit-left">

             <div className='order-note'> 
                <h5>Order Note</h5>
                <p>I want to get my demo tests done asap. </p>
             </div>

             <div className='customer-details'>
                <h5>Customer Details</h5>
                <h6>Contact Information</h6>
                <p> John Doe</p>
                <p> 08012345678</p>
                <p> john@gmail.com</p>
                <h5>Address</h5>
                <p> 123 Main Street</p>
                <p> Lahore</p>
                <p> Pakistan</p>
             </div>

             <div className='patient-details'>
                 <h5>Patient Details</h5>
                 <h6>Contact Information</h6>
                 <p> 08012345678</p>
                 <p> john@gmail.com </p>
                 <h5>Sample collection Address</h5>
                 <p> 123 Main Street</p>
                 <p> Lahore</p>
                 <p> Punjab </p>
                 <p> Pakistan</p>
             </div>

             <div className='lab-details'>
                  <h5>Lab Details</h5>
                  <h6>Contact Information</h6>
                  <p> 08012345678</p>
                  <p> john@gmail.com </p>
                  <h5>Lab Address</h5>
                  <p> CITI Lab</p>
                  <p> Lahore</p>
                  <p> Punjab </p>
                  <p> Pakistan</p>
             </div>

           </div>
       </div>
    </div>
  )
}

export default EditOrder   
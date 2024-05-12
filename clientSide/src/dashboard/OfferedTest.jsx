import React, { useState } from 'react';
import './offeredTest.css';
import LabHeader from '../account/profile/LabHeader';
import Sidebar from './Sidebar';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';
import CustomTestForm from './CustomTestForm';
import { Link } from 'react-router-dom';

const OfferedTest = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [testName, setTestName] = useState('');
  const [price, setPrice] = useState('');
  const [tests, setTests] = useState([]);
  const [showCustomForm, setShowCustomForm] = useState(false); // State for controlling custom form visibility

  const toggleOpen = () => {
    setBasicModal(!basicModal);
  };

  const toggleOff = () => {
    setBasicModal(false);
  };

  const handleSaveChanges = () => {
    const newTest = {
      testName: testName,
      price: price
    };
    setTests([...tests, newTest]);
    toggleOff();
  };

  const toggleCustomForm = () => {
    setShowCustomForm(!showCustomForm); // Toggle custom form visibility
  };

  return (
//     <div style={{display:"flex"}}>
//        {/* <Sidebar/> */}
//       {/* <LabHeader /> */}
//       <div className='offeredtest-main'>   
//         <div 
//         // display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius:"10px" 
//         style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'white', borderRadius:"10px", width:"100%" }}>
//           <div>
//             <h3>Offered Test</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//           </div>
//           <div>
//             <MDBBtn onClick={toggleOpen} style={{ backgroundColor: '#75DBD0', marginLeft: '10px' }}> Add Test</MDBBtn>
//             <MDBBtn onClick={toggleCustomForm} style={{ backgroundColor: '#75DBD0', marginLeft: '10px' }}>Add Custom Test</MDBBtn> 
//           </div>
//         </div>
//         <div className='test-details'> 
//           <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius:"10px", marginTop:"5px", paddingTop:"15px" }}>
//             <p>Name</p>
//             <p>ID </p>
//             <p>Test </p>
//             <p>Price </p>
//             <p>Type </p>
//             <p>Action </p>
//           </div>
//         </div>
//         {tests.map((test, index) => (
//           <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius:"10px", marginTop:"5px", paddingTop:"15px" }}>
//             <p>Test Name: {test.testName}</p>
//             <p>Price: {test.price}</p>
//             <div>
//               <MDBBtn style={{ backgroundColor: '#75DBD0', marginLeft: '10px' }}>Edit</MDBBtn>
//               <MDBBtn style={{ backgroundColor: '#75DBD0', marginLeft: '10px' }}>Delete</MDBBtn>
//             </div>
//           </div>
//         ))}
//         <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
//           <MDBModalDialog>
//             <MDBModalContent>
//               <MDBModalHeader>
//                 <MDBModalTitle>Add Tests</MDBModalTitle>
//                 <MDBBtn className='btn-close' color='none' onClick={toggleOff}></MDBBtn>
//               </MDBModalHeader>
//               <MDBModalBody>
//               <form>
//   <div className="form-group">
//     <label htmlFor="recipient-name" className="col-form-label">Test Name:</label>
//     <select className="custom-select" required style={{width: '100%', height:"30px" }} value={testName} onChange={(e) => setTestName(e.target.value)}>
//       <option value=" Select the test"> </option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </select>
//   </div>
//   <div className="form-group">
//     <label htmlFor="message-text" className="col-form-label">Price:</label>
//     <input type='text' className="form-control" id="message-text" placeholder='e.g: 1500 PKR' onChange={(e) => setPrice(e.target.value)} />
//   </div>
// </form>

//               </MDBModalBody>
//               <MDBModalFooter>
//                 <MDBBtn color='#75DBD0' onClick={toggleOff}>Close</MDBBtn>
//                 <MDBBtn onClick={handleSaveChanges} style={{backgroundColor:"#75DBD0"}}>Save Changes</MDBBtn>
//               </MDBModalFooter>
//             </MDBModalContent>
//           </MDBModalDialog>
//         </MDBModal>
//         {showCustomForm && <CustomTestForm />} {/* Conditionally render the custom form */}
//       </div>
//     </div>
      <div>
        <h1>hello</h1>
      </div>
  );
};

export default OfferedTest;

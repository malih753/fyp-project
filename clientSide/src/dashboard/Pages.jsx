import React from 'react'
import './pages.css';
import LabHeader from './../account/profile/LabHeader.jsx';
import Sidebar from './Sidebar.jsx';
// import EditOrder from '../Edits/EditOrder.jsx';
// import CustomTestForm from './CustomTestForm.jsx';

const Pages = () => {
  return (
    <div style={{display:"flex"}}>
    <LabHeader />
    <Sidebar />
           <div className='pages-main'>
            {/* <EditOrder/> */}
            {/* <CustomTestForm />  toggleCustomForm */}
           </div>
 </div>
 
  )
}

export default Pages

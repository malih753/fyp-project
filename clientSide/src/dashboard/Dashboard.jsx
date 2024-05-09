import React from 'react';
import './dashboard.css';
import LabHeader  from './../account/profile/LabHeader';
import Sidebar from './../dashboard/Sidebar';
const Dashboard = () => {
    return (
      <div style={{display:"flex"}}>
       <Sidebar />
          <LabHeader />
           <div className='dashboard-main'>
           <h2>Dashboard</h2>
           <p>
            
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum placeat similique minus, 
             debitis possimus fugit eveniet nam cupiditate esse consequatur ut minima architecto earum ea 
             culpa 
             impedit quo nobis ipsa adipisci sint commodi quae expedita facere. Impedit id soluta officiis.
           </p>
        
           </div>
 </div>
 
    );
};

export default Dashboard;
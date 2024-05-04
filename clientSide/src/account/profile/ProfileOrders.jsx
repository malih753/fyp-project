import './profileorders.css';
import  {MDBBtn } from 'mdb-react-ui-kit';
import ProfileHeader from './ProfileHeader';
import img from './../../assets/lightbox5.jpg'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom';


const ProfileOrder = () => {
  return (
    <div>
      <ProfileHeader />
       <div className='homes-order'>
             <div className='text-headings'>
              <h3>Order History</h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Enim inventore sequi quod iste voluptas delectus excepturi 
                adipisci doloribus nesciunt autem! </p>
             </div>
        <div className='cards'>
             <div className='cards_details'>
                 <div>
                    <h5>Order Date</h5>
                    <p>12/12/2021</p>
                 </div>
                 <div>   
                     <h5>Order Number </h5>
                     <p>123456789</p>
                 </div>
                 <div>
                   <h5>Total Amount</h5>
                   <p>$123.45</p>
                 </div>  
                 <MDBBtn className='me-1 view-btns'>
                            View Order  
                  </MDBBtn>
           </div> 
            <hr />
           <div className=''>   
              <div className='img_details'>
                 <img src={img} alt="img" />
               <div>
              <div className='heading_img'> 
                   <h4>Healthy 2023 Full Body Checkup</h4> <h4>15500.0 PKR</h4> 
              </div>
              <div className='task_details'><h6> Labs : CITI Lab </h6> <h6><TaskAltIcon/> Paid</h6> </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Enim inventore sequi quod iste voluptas delectus excepturi 
                  adipisci doloribus nesciunt autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Numquam, iure.
                  </p>
            </div>
          </div>
              <div className='status_check'> 
              <h6>Order Status :</h6> <h6><TaskAltIcon className='completed'/> Completed </h6>
              <div><Link to="/products" className='products'>View products</Link> </div>
              </div>
           </div>

        </div>     
       </div>
       
       
</div>

 
  )
}

export default ProfileOrder
/*
 <h4>Order Date</h4>
                  <h4>Order Number </h4>
                  <h4>Total Amount</h4>

                   <p>12/12/2021</p>
                  <p>123456789</p>
                  <p>$123.45</p>
*/ 
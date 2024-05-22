import React from 'react';
import './product.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import ProfileHeader from './ProfileHeader';
import { Link } from 'react-router-dom';
import { FaFlask } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineViewTimeline } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";


const Product = () => {
  let date = new Date("08-04-2024");
  let hours = date.getHours();
  let timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  let formattedTime = date.toLocaleTimeString('en-US', timeOptions);
  let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = date.toLocaleDateString('en-US', dateOptions);

  return (
    <div>
     
      <div className='main-div'>
        <div className='left-div'>
          <div className='card-one'>
            <div className='div-one'>
              <div>
              <FaFlask className='flask' style={{fontSize:"30px", marginTop:"20px", paddingLeft:"10px"}} /> <h3>Healthy 2024 Full Body Check up</h3>
              </div>
              <div>
                <p> ★ Booked 456 times</p>
              </div>
            </div>
            <div className='div-two'>
              <h5>Also known as :</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quod.
              </p>
            </div>
            <div className='div-three'>
              <h3> PKR 15500.0 </h3>
            </div>
            <div className='div-four'>
              <div className='slots'>
                <FaRegCalendarAlt style={{ fontSize: '15px', marginTop: "20px", marginLeft: "15px", marginRight:"10px" }} /> <p> {`Next slot available on : ${formattedDate} at ${formattedTime}`} </p>
              </div>
              <div className='slots'>
                <MdOutlineViewTimeline style={{ fontSize: '20px', marginTop: "15px", marginLeft: "-10px",marginRight:"5px" }} /> <p> Reports in {hours} hrs </p>
              </div>
              <div>
              <MDBBtn style={{ backgroundColor: "#75DBD0", marginTop: "10px", color: "white", marginRight: "20px", fontSize: '10px' }}>
                          <Link to="/collections" className='book-btn'> Book Test </Link>
              </MDBBtn>
              </div>
            </div>
          </div>
          <div className='card-two'>
            <div className="divs-two">
            <div className='packages'>
              <MdOutlineDescription style={{fontSize:"30px", marginTop:"20px", paddingLeft:"10px"}}/>  <h3>Packages Includes </h3>
          </div>
          <div className='package-list'>
           <ul>
              <li>&#8226; Fasting Blood Service (FBS) </li>
              <li>&#8226; Chloride (Cl)</li>
              <li> &#8226; HbA1c (Glycosylated hemoglobin )</li>
            </ul>
           </div>
          <div className='description'>
           <div> <MdDescription style={{fontSize:"20px", marginTop:"10px", marginLeft:"20px"}}/> <h3>Description</h3></div>
           <div>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sint quibusdam natus debitis corrupti enim consequatur error veniam, aliquid odio sapiente voluptatum dignissimos voluptates fugit magnam expedita tempora. Tempore, fugit?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repellat illum iure voluptatum sequi provident, tempora eos maiores quo.
            </p>
           </div>
          </div>
            </div>
          </div>
         
        </div>


        <div className='side-links'>
          <h3>Quick Links</h3>
          <div className="links">
            <p>Overview</p>
            <p>Testimonial</p>
            <p>Risk management</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product;

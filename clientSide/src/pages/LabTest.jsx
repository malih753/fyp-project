import react from 'react'
import "./labTest.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
 
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const LabTest = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation('/cart')   ;
  };
  return (
    <div>
    <Header/>
    <div style={{marginRight:40,marginLeft:50}}>
      <h2>Lab Test</h2>
      <div className="heading">
            <h2>Frequently Booked Packages</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader >Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Advance Renal Pakage</MDBCardTitle>
                  <MDBBtn   className="custom-btn" onClick={handleClick}>Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Second Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn" onClick={handleClick}>Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Third Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn" onClick={handleClick}>Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          <div className="mb-4"></div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fourth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn" onClick={handleClick}>Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fifth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn" onClick={handleClick}>Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Sixth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn" onClick={handleClick}>Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
    
    
    </div>
    
    </div>
  )
}

export default LabTest

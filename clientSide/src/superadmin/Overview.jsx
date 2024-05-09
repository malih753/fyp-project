import React from 'react';
import './settings.css';
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
const Overview = () => {
  return (
    <div>
      <div className="fourth">
          <div className="heading">
            <h2>Frequently Booked Packages</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader >Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Advance Renal Pakage</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Second Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Third Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
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
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fifth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Sixth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
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
                  <MDBCardTitle>Seventh Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Eighth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Ninth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Overview

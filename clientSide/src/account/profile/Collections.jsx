import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle } from 'mdb-react-ui-kit';
import './collections.css'
import ProfileHeader from './ProfileHeader';

const Collections = () => {
  return (
   <div>
   <ProfileHeader />
    <div className='main-collection'>
      <h2>Full Body Check up</h2>
      <div className="one_card">
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
            <div className="cols">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Second Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="cols">
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
            <div className="cols">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fourth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="cols">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Fifth Package</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Collections

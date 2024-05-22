import react from 'react'
import "./labTest.css";
import { Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { packages } from '../constant/constant';

const LabTest = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation('/cart');
  };
  return (
    <div>
      <div style={{ marginRight: 40, marginLeft: 50 }}>
        <h2>Lab Test</h2>
        <div className="heading">
          <h2>Frequently Booked Packages</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>

          {packages.map((pack) => (
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <MDBCardTitle>{pack.title}</MDBCardTitle>
                  <Typography sx={{
                    backgroundColor: "white", borderRadius: "10px", border
                      : "1px solid black", borderColor: "black", width: "fit-content", margin: "10px 0", padding: "10px"
                  }}>{pack.price}</Typography>
                  <MDBBtn href="#" className="custom-btn">
                    Book Now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}

        </div>


      </div>

    </div>
  )
}

export default LabTest

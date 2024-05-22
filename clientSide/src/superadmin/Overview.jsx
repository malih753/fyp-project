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
import { packages } from '../constant/constant';
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
const Overview = () => {
  return (
    <div>
      <div className="fourth">
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
                  <Link to={`/cart/${pack.title}`}>
                    <MDBBtn className="custom-btn">
                      Book Now
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Overview

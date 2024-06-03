import { Typography } from "@mui/material";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ServerDomain } from "../constant/ServerDomain";
import "./settings.css";

const Overview = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get(`${ServerDomain}/info/getTopSellingInfos`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setPackages(response.data.package);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="fourth">
        <div className="heading">
          <h2>Frequently Booked Packages</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {packages.map((pack) => (
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <MDBCardTitle>{pack.title}</MDBCardTitle>
                  <Typography
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      border: "1px solid black",
                      borderColor: "black",
                      width: "fit-content",
                      margin: "10px 0",
                      padding: "10px",
                    }}
                  >
                    {pack.price}
                  </Typography>
                  <Link to={`/cart/${pack.title}`}>
                    <MDBBtn className="custom-btn">Book Now</MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;

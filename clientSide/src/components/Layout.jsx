import react, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePageTest from "./../assets/HomePageTest.png";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import lightbox1 from "./../assets/full.jpg";
import lightbox2 from "./../assets/vitmains.jpeg";
import lightbox3 from "./../assets/diabiesties.webp";
import lightbox4 from "./../assets/fever.png";
import icon from "../assets/right-arrow.png";
// import lightbox5 from './../assets/lightbox5.jpg';
import "./layout.css";
import { packages } from "../constant/constant";
import { Typography } from "@mui/material";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { ServerDomain } from "../constant/ServerDomain";

const Layout = () => {
  const [frequentPackages, setFrequentPackages] = useState([]);

  const navigate = useNavigate();
  const { user } = useAuth();
  const handleClick = (title) => {
    console.log("user", user);
    if (Object.keys(user).length > 0) {
      navigate(`/cart/${title}`);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    axios
      .get(`${ServerDomain}/info/getTopSellingInfos`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setFrequentPackages(response.data.package);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <main className="homePage">
        <div className="first">
          <div className="left-home-side">
            <div className="left-heading">
              <h2 id="title">LabEase - Your path to Healthier Living.</h2>
            </div>
            <div className="left-txt">
              <p id="hero-paragraph">
                Streamlining Laboratory Services for your convenience by your
                choice and wish
              </p>
            </div>
            <div className="left-btn" style={{ display: "flex", gap: "10px" }}>
              <MDBBtn className="me-1" style={{ backgroundColor: "#75DBD0" }}>
                <Link to="/predictPackages" style={{ color: "white" }}>
                  Get STARTED{" "}
                  <MDBIcon fas icon="arrow-right" className="ms-1" />
                </Link>
              </MDBBtn>
              <MDBBtn
                className="me-1"
                color="#75DBD0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                Speak to sales
              </MDBBtn>
            </div>
          </div>
          <div className="right-home-side">
            <img src={HomePageTest} alt="right test image" />
          </div>
        </div>

        {/* second */}

        <div className="second Tooltip">
          <div className="row row-cols-1 row-cols-md-1">
            <div className="col mb-3">
              <div
                style={{
                  color: "rgb(51 162 150)",
                  backgroundColor: "#f8f9fa",
                  width: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <span
                  className="packages-category"
                  style={{ fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                  Health packages
                </span>
              </div>
            </div>
            <div className="col mb-3">
              <div
                style={{
                  color: "rgb(51 162 150)",
                  backgroundColor: "#f8f9fa",
                  width: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <span
                  className="packages-category"
                  style={{ fontWeight: "bold", fontSize: 18 }}
                >
                  Recent Packages
                </span>
              </div>
            </div>
            <div className="col mb-3">
              <div
                style={{
                  color: "rgb(51 162 150)",
                  backgroundColor: "#f8f9fa",
                  width: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <span
                  className="packages-category"
                  style={{ fontWeight: "bold", fontSize: 18 }}
                >
                  Upload Data
                </span>
              </div>
            </div>
            <div className="col mb-3">
              <div
                style={{
                  color: "rgb(51 162 150)",
                  backgroundColor: "#f8f9fa",
                  width: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <span
                  className="packages-category"
                  style={{ fontWeight: "bold", fontSize: 18 }}
                >
                  Recall for Now
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="third">
          <div className="heading">
            <h2>Lab Tests By Health Concerns</h2>
          </div>
          <div className="row">
            <div className="col-6 col-md-3 mb-4">
              <img
                src={lightbox1}
                alt="a"
                className="rounded-lg"
                style={{ width: 230, height: 202, borderRadius: 25 }}
              />
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img
                src={lightbox2}
                alt="b"
                className="rounded-lg"
                style={{ width: 230, height: 202, borderRadius: 25 }}
              />
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img
                src={lightbox3}
                alt="c"
                className=" rounded-lg"
                style={{ width: 230, height: 202, borderRadius: 25 }}
              />
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img
                src={lightbox4}
                alt="d"
                className=" rounded-lg"
                style={{ width: 230, height: 202, borderRadius: 25 }}
              />
            </div>
          </div>
        </div>

        <div className="fourth">
          <div className="heading">
            <h2>Frequently Booked Packages</h2>
          </div>
          <div
            className="packages-wrapper"
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
                    <MDBBtn
                      className="custom-btn"
                      onClick={() => handleClick(pack.title)}
                    >
                      Book Now
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>
        </div>
        <div className="fifth">
          <div className="heading">
            <h2>Frequently Booked Tests</h2>
          </div>

          <div
            className="packages-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "30px",
            }}
          >
            {frequentPackages.map((pack) => (
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
                    <MDBBtn
                      className="custom-btn"
                      onClick={() => handleClick(pack.title)}
                    >
                      Book Now
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

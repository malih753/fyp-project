import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePageTest from "./../assets/HomePageTest.png";
import { Link } from 'react-router-dom';
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

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="home-page">
        <div className="first">
          <div className="left-home-side">
            <div className="left-heading">
              <h2>LabEase - Your path to Healthier Living.</h2>
            </div>
            <div className="left-txt">
              <p>
                Streamlining Laboratory Services for your convenience by your choice and wish.
              </p>
            </div>
            <div className="left-btn" style={{ display: "flex", gap: "10px" }}>
              <MDBBtn className="me-1" style={{ backgroundColor: "#75DBD0" }}>
                <Link to="/predictPackages" style={{ color: "white" }}>
                  Get Started <MDBIcon fas icon="arrow-right" className="ms-1" />
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
              <div style={{ color: "#75DBD0", backgroundColor: "#f8f9fa", width: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 ,padding:10}}>
               
                <span style={{ fontWeight: 'bold', fontSize:15}}> Health packages</span>
              </div>
            </div>
            <div className="col mb-3">
              <div style={{ color: "#75DBD0", backgroundColor: "#f8f9fa", width: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 ,padding:10}}>
               
                <span style={{ fontWeight: 'bold', fontSize:15}}>Recent Packages</span>
              </div>
            </div>
            <div className="col mb-3">
              <div style={{ color: "#75DBD0", backgroundColor: "#f8f9fa", width: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 ,padding:10}}>
               
                <span style={{ fontWeight: 'bold', fontSize:15}}>Upload Data</span>
              </div>
            </div>
            <div className="col mb-3">
              <div style={{ color: "#75DBD0", backgroundColor: "#f8f9fa", width: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 ,padding:10}}>
               
                <span style={{ fontWeight: 'bold', fontSize:15}}>Recall for Now</span>
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
              <img src={lightbox1} alt="a" className="rounded-lg" style={{ width: 250, height: 230, borderRadius: 150 }} />
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={lightbox2} alt="b" className="rounded-lg" style={{ width: 250, height: 230, borderRadius: 150 }} />
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={lightbox3} alt="c" className=" rounded-lg" style={{ width: 250, height: 230, borderRadius: 150 }} />
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src={lightbox4} alt="d" className=" rounded-lg" style={{ width: 260, height: 230, borderRadius: 150 }} />
            </div>
          </div>
        </div>


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
                  <MDBCardTitle>Blood urea nitrogen test</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Calcium blood test</MDBCardTitle>
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
                  <MDBCardTitle> CO2 blood test</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle> Albumin blood test</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle> C-reactive protein (CRP) test</MDBCardTitle>
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
                  <MDBCardTitle> Pancreas blood tests</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle> Cardiac blood tests</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle> Arterial blood gas test</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
        <div className="fifth">
          <div className="heading">
            <h2>Frequently Booked Tests</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
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
                  <MDBCardTitle> Arterial blood gas test</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col">
              <MDBCard alignment="center">
                <MDBCardHeader>Pakage</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle> Chloride blood test</MDBCardTitle>
                  <MDBBtn href="#" className="custom-btn">Book Now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
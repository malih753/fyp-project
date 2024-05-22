import react from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow, MDBCard, MDBBtn,
  MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, 
} from 'mdb-react-ui-kit';
import './profile.css';
import { Link } from 'react-router-dom';
import ProfileHeader from './profile/ProfileHeader';


const Profile = () => {
  return (
    <div >
     
      <section className="vh-100 " style={{ backgroundColor: '#f4f5f7',margin: '0 auto',maxWidth: '900px' }}>
        <MDBContainer className="py-5 h-200 " >
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-6" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="13" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="my-5" style={{ width: '200px', height:"150px", marginBottom:"100px", marginTop:"100px"  }} fluid />
                    <MDBCardText style={{paddingBottom:"20px", paddingRight:"20px"}}> <h4>Admin</h4> </MDBCardText>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">info@example.com</MDBCardText>
                        </MDBCol>
                        <MDBCol size="12" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">+92308-6605544</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <div className="d-flex justify-content-start mb-1 "> 
                           <Link to="/dashboard" ><MDBBtn  className="me-3" style={{ backgroundColor: '#75DBD0', padding:"8px",width:"100px" }}>Lab admin</MDBBtn></Link>
                           <Link to="/profileorders" > <MDBBtn  className="me-3" style={{ backgroundColor: '#75DBD0', padding:"8px",width:"100px" }}>Orders</MDBBtn> </Link>
                           <Link to="/home" > <MDBBtn className="me-3" style={{ backgroundColor: '#75DBD0', padding:"8px",width:"100px" }}>Log out</MDBBtn>  </Link>
                    </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default Profile;


import react from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from './../assets/LabEase Logo.png'
import "./footer.css";

const Footer = () => {
    return (
      <MDBFooter  className='text-center text-lg-start text-muted '>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block '>
            <span className='social-link'>Get connected with us on social networks:</span>
          </div>
  
          <div className='social-icon'>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" style={{color:"#75dbd0"}} /> 
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" style={{color:"#75dbd0"}}/>
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" style={{color:"#75dbd0"}} />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" style={{color:"#75dbd0"}} />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin"  style={{color:"#75dbd0"}}/>
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" style={{color:"#75dbd0"}}/>
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-log ' style={{marginLeft:"100px", color:"#75dbd0"}}>
                  {/* <img src={logo} alt="logo" style={{width:"530px",paddingTop:"10px",}} />  */}
                  LabEase
                </h6 >
                <p style={{marginLeft:"90px"}}> Get start your health here.</p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                  Booked Packages
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Booked Tests
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                   My Cart
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset '>
                   Home
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Tests
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" style={{color:"#75dbd0"}}/>
                  Lahore, Pakistan
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3 "style={{color:"#75dbd0"}} />
                  xyz@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" style={{color:"#75dbd0"}}/> +92308-6605544
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className=' footer-copyright'>
          © {new Date().getFullYear()} Copyright:
          <a className='text-reset fw-bold' href='#!'>
            Shoaib
          </a>
        </div>
      </MDBFooter>
    );
  };
  
  export default Footer;
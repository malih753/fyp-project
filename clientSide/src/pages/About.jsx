import React from 'react';
import Footer from '../components/Footer';
import ProfileHeader from '../account/profile/ProfileHeader';

const About = () => {
  return (
    <div className="container" style={{ marginTop: 120 }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <p className="text-center mb-5" style={{ color: "#75dbd0", fontWeight: "bold", fontSize: 22 }}>
            INTRODUCING
          </p>
          <h4 className="text-center mb-5" style={{ textAlign: "justify", fontFamily: "cursive", fontSize: 28, fontWeight: "bold" }}>
            LabEase Redefining HealthCare Access
          </h4>
          <ul className="text-justify">
            LabEase is a comprehensive web-based platform designed to streamline access to laboratory services for patients. It simplifies the process of finding, comparing, and scheduling lab tests. The platform centralizes information on tests, prices, appointments, and results, making it easier for users to make informed healthcare decisions. With modules like test information, appointment scheduling, result display, and user feedback, LabEase aims to enhance the patient experience, save time, and improve the overall efficiency of healthcare services.
            Centralize Information: Provide a single platform where patients can access comprehensive information about various lab tests, including prices, descriptions, and instructions
            Facilitate Comparison.
            <br></br>

            <br></br>
             Enable users to compare prices among different laboratories and make informed decisions regarding their healthcare needs
            Streamline Appointments: Offer an easy-to-use appointment module, allowing patients to schedule tests hassle-free
            Efficient Result Delivery: Display test results directly on the platform once processed, ensuring timely access for patient.
            
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import axios from 'axios';

const PredictPackages = () => {
  const [symptoms, setSymptoms] = useState({
    symptom1: '',
    symptom2: '',
    symptom3: ''
  });
  const [recommendedPackage, setRecommendedPackage] = useState(null);
  const [recommendedTest, setRecommendedTest] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymptoms(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8001/recommend_test/', {
        ...symptoms
      });
      if (response.status === 200) {
        setRecommendedPackage(response.data.package);
        setRecommendedTest(response.data.test);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Symptom Checker</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="symptom1" className="form-label">Symptom 1:</label>
                  <input type="text" id="symptom1" className="form-control" name="symptom1" value={symptoms.symptom1} onChange={handleChange} />
                </div> 
                <div className="mb-3">
                  <label htmlFor="symptom2" className="form-label">Symptom 2:</label>
                  <input type="text" id="symptom2" className="form-control" name="symptom2" value={symptoms.symptom2} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="symptom3" className="form-label">Symptom 3:</label>
                  <input type="text" id="symptom3" className="form-control" name="symptom3" value={symptoms.symptom3} onChange={handleChange} />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Check Symptoms</button>
                </div>
              </form>
              {recommendedPackage && (
                <div>
                  <h3 className="text-center mt-4">Recommended Package:</h3>
                  <p className="text-center">{recommendedPackage}</p>
                </div>
              )}
              {recommendedTest && (
                <div>
                  <h3 className="text-center mt-4">Recommended Test:</h3>
                  <p className="text-center">{recommendedTest}</p>
                  <div className="text-center">
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictPackages;

import React, { useState } from 'react';
import axios from 'axios';

const PredictPackages = () => {
  const [symptom, setSymptom] = useState('');
  const [recommendedTest, setRecommendedTest] = useState(null);

  const handleChange = (e) => {
    setSymptom(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8080/api/chatbot', {
        prompt: symptom
      },
      {
        headers: {
          'Content-Type':'multipart/form-data',
        }
      }
    );
    console.log("response api",response)
      if (response.status === 200) {
        
        setRecommendedTest(response.data.data);
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
              <h2 className="card-title text-center mb-4">Test Suggestion or Symptoms checker</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="symptom" className="form-label">Symptom:</label>
                  <input type="text" id="symptom" className="form-control" value={symptom} onChange={handleChange} />
                </div> 
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
              {recommendedTest && (
                <div>
                  
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

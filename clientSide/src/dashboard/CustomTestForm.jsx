import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './CustomTestForm.css';

const CustomTestForm = () => {
  const [testName, setTestName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [id, setId] = useState('');
  const [alias, setAlias] = useState('');
  const [instructions, setInstructions] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [reportsDuration, setReportsDuration] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [testRequirements, setTestRequirements] = useState([]);
  const [newTestRequirement, setNewTestRequirement] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleAddRequirement = () => {
    const newRequirement = { testRequirement: newTestRequirement, value: newValue };
    setTestRequirements([...testRequirements, newRequirement]);
    setNewTestRequirement('');
    setNewValue('');
  };

  const handleDeleteRequirement = (index) => {
    const updatedRequirements = [...testRequirements];
    updatedRequirements.splice(index, 1);
    setTestRequirements(updatedRequirements);
  };

  return (
     <div className="custom-test-form-container">
      <form className="custom-form">
        <div className="form-group">
          <label>Test Name</label>
          <select className="custom-select" required>
            <option value=" "> Select the test</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="form-group">
          <label>ID</label>
          <input type="text" className="form-control" placeholder="Enter ID" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="text" className="form-control" placeholder="Enter Price" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" placeholder="Enter Description"></textarea>
        </div>
        <div className="form-group">
          <label>Type</label>
          <input type="text" className="form-control" placeholder="Enter Type" />
        </div>
        
        <div className="form-group">
          <label>Alias</label>
          <input type="text" className="form-control" placeholder="Enter Alias" />
        </div>
        <div className="form-group">
          <label>Instructions</label>
          <textarea className="form-control" placeholder="Enter Instructions"></textarea>
        </div>
        <div className="form-group">
          <label>Starting Price</label>
          <input type="text" className="form-control" placeholder="Enter Starting Price" />
        </div>
        <div className="form-group">
          <label>Reports Duration</label>
          <input type="text" className="form-control" placeholder="Enter Reports Duration" />
        </div>
        <div className="form-group">
          <label>Short Description</label>
          <input type="text" className="form-control" placeholder="Enter Short Description" />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" className="form-control" placeholder="Enter Image URL" />
        </div>
        <MDBBtn type="submit" style={{backgroundColor:"#75DBD0"}}>Submit</MDBBtn>
      </form>
      
      <h3>Test Requirement</h3>
      <div>
        <div className='test-requirement'>
        <div className='test-requirement-input'>
              <input type="text" className="form-control" placeholder="Test Requirement" value={newTestRequirement} onChange={(e) => setNewTestRequirement(e.target.value)} />
            </div>
            <div>
              <input type="text" className="form-control" placeholder="Value" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
            </div>
            <div>
              <MDBBtn style={{backgroundColor:"#75DBD0"}} onClick={handleAddRequirement}>Add</MDBBtn>
            </div>
        </div>
      </div>
      <div className='test-requirement-actions'> 
        <div className='test-requirement-actions-input'>
          <p>Test Requirement </p>
        </div>
        <div className='test-requirement-actions-input'>
          <p>Value </p>
        </div>
        <div className='test-requirement-actions-input'>
          <p>Actions </p>
        </div>
      </div>
      {testRequirements.map((requirement, index) => (
          <div key={index} className='test-requirement-actions'>
            <div className='test-requirement-actions-input'>
              <p>{requirement.testRequirement}</p>
            </div>
            <div className='test-requirement-actions-input'>
              <p>{requirement.value}</p>
            </div>
            <div className='test-requirement-actions-input'>
              <MDBBtn style={{ backgroundColor: '#75DBD0', marginLeft: '10px' }} onClick={() => handleDeleteRequirement(index)}>Delete</MDBBtn>
            </div>
          </div>
        ))}
          
    </div>
    
  );
};

export default CustomTestForm;

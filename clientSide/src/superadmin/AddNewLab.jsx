import react from 'react';
import { Form, Button } from 'react-bootstrap';


const  AddNewLab = () => {
  return (
    <div className="container justify-content-center align-items-center vh-100" style={{ marginTop: 80, backgroundColor:"" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <p className="text-center sm: mt-5" style={{ color: "#75dbd0", fontWeight: "bold", fontSize: 34, fontFamily: "cursive" }}>Add new Lab User</p>

          <Form>
            <div className="row">
              <div className="col">
                <Form.Group controlId="firstName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="lastName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text"   />
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"   />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone No</Form.Label>
              <Form.Control type="tel"   />
            </Form.Group>

            <Form.Group controlId="role">
    <label htmlFor="role">Add Role</label>
    <br />
    <select id="role" className="form-control" style={{ maxWidth: "630px", height: "40px", outline: "none", marginTop: "-5px" }}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="lab">Lab</option>
    </select>
</Form.Group>

 
            <Button variant="primary" type="add user" className="w-100 mt-5 p-2 " style={{backgroundColor:"#75DBD0",marginLeft:"-4px" }}> Add new User </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNewLab; 
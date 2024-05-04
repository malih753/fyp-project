import react from 'react';
import { Form, Button } from 'react-bootstrap';


const AddCollections = () => {
  return (
    <div className="container justify-content-center align-items-center vh-100" style={{ marginTop: 80, backgroundColor:"" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <p className="text-center sm: mt-5" style={{ color: "#75dbd0", fontWeight: "bold", fontSize: 34, fontFamily: "cursive" }}>Add new Collection </p>

          <Form>
            <div className="row">
              <div className="col">
                <Form.Group controlId="firstName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="slug">
                  <Form.Label>Slug</Form.Label>
                  <Form.Control type="text"   />
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="imgurl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text"   />
            </Form.Group>
            
            <Form.Group controlId="message" >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}   />
            </Form.Group>
              
            <Form.Group controlId="message">
    <label htmlFor="role" style={{ marginTop: "20px" }}>Add Items</label>
    <br />
    <select id="role" style={{ width: "100%", maxWidth: "630px", height: "40px", outline: "none", marginTop: "-5px" }}>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
        </select>
     </Form.Group>

            <Button variant="primary" type="add user" className="w-100 mt-4 p-2 " style={{backgroundColor:"#75DBD0",marginLeft:"-4px" }}> Add new User </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCollections
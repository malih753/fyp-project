import react,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios for making HTTP requests

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [phone_no,setPhoneNo]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to sign up endpoint
      const payloadData = {
        firstName,
        email,
        password,
        phone_no,
        role
      }
      const response = await axios.post('http://localhost:5000/api/v1/getNewUser/createNewUser', payloadData,{
        headers:{'Content-Type':'application/json'},
        withCredentials:true
      });

      console.log(response.data);
      // Log response data
    } catch (error) {
      console.error('Error signing up:', error);
      // You can handle error response here, such as displaying an error message to the user
    }
  };
  return (
    <div className="container justify-content-center align-items-center vh-100" style={{ marginTop: 80, backgroundColor: "" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <p className="text-center sm: mt-5" style={{ color: "#75dbd0", fontWeight: "bold", fontSize: 34, fontFamily: "cursive" }}>Add new User</p>

          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <Form.Group controlId="firstName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="lastName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone No</Form.Label>
              <Form.Control type="tel" value={phone_no} onChange={(e) => setPhoneNo(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="role">
              <label htmlFor="role">Add Role</label>
              <br />
              <select id="role" className="form-control" style={{ maxWidth: "630px", height: "40px", outline: "none", marginTop: "-5px" }} value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Lab User">Lab User</option>
              </select>
            </Form.Group>
            {/* 'User','Admin','Lab User' */}


            <Button type="submit" variant="primary"  className="w-100 mt-5 p-2 " style={{ backgroundColor: "#75DBD0", marginLeft: "-4px" }} > Add new User </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddUser 
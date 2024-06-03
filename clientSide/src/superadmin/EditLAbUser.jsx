import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";
const AddEditLabUser = ({ isOpen, setIsOpen, setRefresh, user }) => {
  const [firstname, setFirstName] = useState("");
  const [test_name, setTestName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (user) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/v1/getNewUser/updateLabUser/${user?._id}`,
          {
            firstname,
            test_name,
            email,
            password,
            role,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setRefresh((prev) => !prev);
        setIsLoading(false);
       
        console.log(response);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/getNewUser/createLabUser",
          {
            firstname,
            test_name,
            email,
            password,
            role,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setRefresh((prev) => !prev);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstname);
      setTestName(user.test_name);
      setEmail(user.email);
      setPassword(user.password);
      setRole(user.role);
    }
  }, []);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle marginBottom={"20px"}>Add Lab User</DialogTitle>
      <DialogContent
        sx={{ minHeight: "350px", width: "450px", overflowY: "visible" }}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <TextField
            id="outlined-basic"
            label="Test Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setTestName(e.target.value)}
            value={test_name}
          />
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={role}
              label="Role"
              onChange={(e) => setRole(e.target.value)}
              defaultValue="User"
            >
              <MenuItem value={"User"}>
                User
              </MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
              <MenuItem value={"Lab User"}>Lab User</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" disable={isLoading} onClick={handleSubmit}>
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditLabUser;

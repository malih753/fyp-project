import React, { useEffect, useState } from "react";
import "./users.css";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import { ServerDomain } from "../constant/ServerDomain";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${ServerDomain}/getNewUser/getAdminUsers`, {
        withCredentials: true,
      })
      .then((response) => {
        setAllUsers(response?.data?.newUsers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <div className="user-main">
        <div className="user-heading">
          <h3>Users </h3>
          <p>Manage all existing users or add new one.</p>
        </div>
        <div className="user-btn">
          <Link to="/addUser">
            <MDBBtn color="primary" size="lg">
              Add new user
            </MDBBtn>
          </Link>
        </div>
      </div>


      <TableContainer sx={{ padding: "30px 30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight:600}}>Name</TableCell>
              <TableCell sx={{fontWeight:600}} align="left">Email</TableCell>
              <TableCell sx={{fontWeight:600}} align="left">Role</TableCell>
              <TableCell sx={{fontWeight:600}} align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((user, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.firstname}
                </TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.role}</TableCell>
                <TableCell align="left">
                  <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    <Link to="/edit">
                      {" "}
                      <MDBBtn
                        style={{
                          backgroundColor: "#75DBD0",
                          display: "flex",
                          color: "white",
                          marginTop: "10px",
                          marginLeft: "0",
                        }}
                      >
                        Edit
                      </MDBBtn>
                    </Link>
                    <Link to="/edit">
                      {" "}
                      <MDBBtn
                        style={{
                          backgroundColor: "#75DBD0",
                          display: "flex",
                          color: "white",
                          marginTop: "10px",
                          marginLeft: "0",
                        }}
                      >
                        Delete
                      </MDBBtn>
                    </Link>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;

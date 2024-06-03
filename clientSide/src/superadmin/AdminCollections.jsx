import React, { useState, useEffect } from "react";
import "./adminCollection.css";
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
import { Avatar, Box, Stack } from "@mui/material";
import { ServerDomain } from "../constant/ServerDomain";

const AdminCollection = () => {
  const [allCollections, setAllCollections] = useState([]);
  useEffect(() => {
    axios
      .get(`${ServerDomain}/collection/get-collection`, {
        withCredentials: true,
      })
      .then((response) => {
        setAllCollections(response.data?.collections);
        console.log(response.data?.collections);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(allCollections);
  return (
    <div>
      <div className="collection-main">
        <div className="collection-heading">
          <h3> Collections </h3>
          <p>Manage all existing collection or add new one.</p>
        </div>
        <div className="collection-btn">
          <Link to="/addCollections">
            <MDBBtn
              color="primary"
              size="lg"
              style={{ backgroundColor: "#75dbd0", color: "white" }}
            >
              Add new collection
            </MDBBtn>
          </Link>
        </div>
      </div>

      {/* <div className="collection-action">
        <div className="collection-action-one">
          <p>ID</p>
          <p>Name</p>
          <p>Active</p>
          <p>Image</p>
          <p>Action</p>
        </div>

        <div className="collection-action-two">
          <p>123456789 </p>
          <p>Ali khan</p>
          <p>Yes</p>
          <p> awierusc jxksjdiuraskld jfuioASD H</p>
          <div style={{ display: "flex" }}>
            <Link to="/edit">
              {" "}
              <MDBBtn
                style={{
                  backgroundColor: "#75DBD0",
                  display: "flex",
                  color: "white",
                  marginTop: "10px",
                  marginRight: "20px",
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
                  marginRight: "20px",
                }}
              >
                Delete
              </MDBBtn>
            </Link>
          </div>
        </div>
      </div> */}

      <TableContainer sx={{ padding: "30px 30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead spac>
            <TableRow >
              <TableCell sx={{ fontWeight: 600 }}>Username</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="left">
                Message
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="left">
                Image
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCollections.map((collection, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {collection.username}
                </TableCell>
                <TableCell align="left">{collection.message}</TableCell>
                <TableCell align="left">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={collection.image}
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "cover",padding:0 }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminCollection;

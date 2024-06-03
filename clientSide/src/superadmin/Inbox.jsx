import React, { useEffect, useState } from "react";
import "./inbox.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { ServerDomain } from "../constant/ServerDomain";
import { Stack } from "react-bootstrap";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`${ServerDomain}/info/getMessages`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setMessages(response.data.messages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="msg-main">
        <div className="lab-heading">
          <h3> Support Messages </h3>
          <p>
            Manage all support message or queries submitted through contact form
            .
          </p>
        </div>
        <div className="msg-btn">
          <Link to="#!">
            <MDBBtn color="primary" size="lg">
              Refresh
            </MDBBtn>
          </Link>
        </div>
      </div>
      <TableContainer sx={{ padding: "30px 30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="left">
                Message
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((msg, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border:0} }}
              >
                <TableCell sx={{paddingTop:"20px",paddingBottom:"20px"}} component="th" scope="row">
                  {msg.name}
                </TableCell>
                <TableCell align="left">{msg.message}</TableCell>
                
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inbox;

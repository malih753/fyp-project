import { FormControl, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "./labs.css";
import AddEditLabUser from "./EditLAbUser";
import { ServerDomain } from "../constant/ServerDomain";

const Labs = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [open, setOpen] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState({});
  console.log(open);

  const handleDeleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `${ServerDomain}/getNewUser/deleteLabUser/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${ServerDomain}/getNewUser/getLabUsers`, {
        withCredentials: true,
      })
      .then((response) => {
        setAllUsers(response?.data?.transformedUsers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [refresh]);

  return (
    <div>
      <div
        className="lab-main"
        style={{ alignItems: "center", padding: "0 1rem" }}
      >
        <div className="lab-heading">
          <h3>Lab</h3>
          <p>Manage all existing labs.</p>
        </div>

        <Button
          sx={{ backgroundColor: "#75DBD0", height: "40px" }}
          color="primary"
          variant="contained"
          onClick={() => {
            setIsOpen(true);
            setEditUser({});
          }}
        >
          Add new Lab
        </Button>
      </div>

      <TableContainer sx={{ padding: "30px 30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="left">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="left">
                Test Name
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="left">
                Actions
              </TableCell>
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
                <TableCell align="left">{user.test_name}</TableCell>
                <TableCell align="left">
                  <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    <MDBBtn
                      onClick={() => {
                        setIsOpen(true);
                        setEditUser(user);
                      }}
                      style={{
                        backgroundColor: "#75DBD0",
                        display: "flex",
                        color: "white",
                        marginTop: "10px",
                        marginLeft: "0",
                        marginRight: "30px",
                      }}
                    >
                      Edit
                    </MDBBtn>
                    <MDBBtn
                      style={{
                        backgroundColor: "#75DBD0",
                        display: "flex",
                        color: "white",
                        marginTop: "10px",
                        marginLeft: "0",
                      }}
                      onClick={() => setOpen(user._id)}
                    >
                      Delete
                    </MDBBtn>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {open && (
        <DraggableDialog
          open={open}
          setOpen={setOpen}
          handleDeleteUser={handleDeleteUser}
        />
      )}

      {isOpen && (
        <AddEditLabUser
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setRefresh={setRefresh}
          user={editUser}
        />
      )}
    </div>
  );
};

function DraggableDialog({ open, setOpen, handleDeleteUser }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = (id) => {
    setOpen(false);
    handleDeleteUser(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open ? true : false}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleConfirm(open)}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Labs;

import { Avatar, Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ServerDomain } from "../constant/ServerDomain";

const AddCollections = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("image", image);
      formData.append("message", message);
      const response = await axios.post(
        ` ${ServerDomain}/collection/create-collection`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="container justify-content-center align-items-center vh-100"
      style={{ marginTop: 80, backgroundColor: "" }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <p
            className="text-center sm: mt-5"
            style={{
              color: "#75dbd0",
              fontWeight: "bold",
              fontSize: 34,
              fontFamily: "cursive",
            }}
          >
            Add new Collection{" "}
          </p>

          <Form>
            <div className="row">
              <div className="col">
                <Form.Group controlId="imgurl">
                  <Box
                    sx={{
                      mx: "auto",
                      width: "10rem",
                      height: "10rem",
                      position: "relative",
                    }}
                  >
                    <Avatar
                      sx={{
                        mx: "auto",
                        width: "10rem",
                        height: "10rem",
                        objectFit: "contain",
                      }}
                      src={image ? URL.createObjectURL(image) : null}
                    />
                    <Form.Control
                      style={{
                        position: "absolute",
                        width: "10rem",
                        height: "10rem",
                        top: 0,
                        opacity: 0,
                      }}
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      type="file"
                    />
                  </Box>
                </Form.Group>
                <Form.Group controlId="firstName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleSubmit}
              className="w-100 mt-4 p-2 "
              style={{ backgroundColor: "#75DBD0", marginLeft: "-4px" }}
            >
              {" "}
              Add new User{" "}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCollections;

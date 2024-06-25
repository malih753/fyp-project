import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../context/authContext";
import { ServerDomain } from "../constant/ServerDomain";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { login, user } = useAuth();

  if (Object.keys(user).length > 0) return <Navigate to={"/"} />;
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payloadData = {
        email,
        password,
      };
      const response = await axios.post(
        `${ServerDomain}/auth/login`,
        payloadData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.data?.success) {
        navigation("/home");
        login(response.data?.user);
      }

      // Handle success response here, such as setting user authentication state or redirecting to another page
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error response here, such as displaying an error message to the user
    }
  };

  return (
    <div
      className="profile-wrapper"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      <section
        className="vh-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        style={{ background: "#f4f5f7" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                        className="form-label"
                        style={{ marginBottom: "-50px" }}
                      >
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-6">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        style={{ background: "#f4f5f7" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label">Password</label>
                    </div>
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block custom-button"
                      type="Submit"
                    >
                      Login
                    </button>
                  </form>
                  <hr className="my-4" />
                  <div className="text-center">
                    <p>
                      Not a member? <Link to="/register">Register</Link>
                    </p>
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                      
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

import { useState } from "react";
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { BsPerson } from "react-icons/bs";
// import logo from './../assets/LabEase Logo.png'
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./header.css";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import profileImg from "../assets/profileImg.png";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { ServerDomain } from "../constant/ServerDomain";
=======
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import profileImg from '../assets/profileImg.png'
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pages = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Lab Test",
      path: "/test",
    },
  ];
  const settings = [
    { title: "Profile", path: "/profile" },
    { title: "Account", path: "/" },
    { title: "Dashboard", path: "/labadmin" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

<<<<<<< HEAD
  const navigate= useNavigate()
  const pages = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Lab Test",
      path: "/test",
    },
  ];
  const settings = [
    { title: "Profile", path: "/profile" },

    { title: "Dashboard", path: "/labadmin" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

=======
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
<<<<<<< HEAD

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = async () => {
    try {
      const response = await axios.get(`${ServerDomain}/auth/logout`, {
        withCredentials: true,
      });
      if (response.data.success) {
        navigate("/")
        logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
=======

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
    <AppBar
      position="static"
      sx={{ bgcolor: "#75DBD0", paddingX: "50px", paddingY: "15px" }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          width={"100%"}
          alignItems={"center"}
          spacing={4}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} gap={"5px"} alignItems={"center"}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" } }} />
            <a
              className="navbar-brand "
              href="#"
              style={{
                paddingLeft: "0",
                color: "white",
                fontWeight: 500,
                fontSize: "20px",
              }}
            >
              Lab Ease
            </a>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "40px",
            }}
          >
<<<<<<< HEAD
            {pages.map((page, i) => (
=======
            {pages.map((page,i) => (
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
              <Link
                style={{ color: "white" }}
                key={i}
                onClick={handleCloseNavMenu}
                to={page.path}
              >
                {page.title}
              </Link>
            ))}
          </Box>

          <Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
<<<<<<< HEAD
              {settings.map((setting, i) => (
=======
              {settings.map((setting,i) => (
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Link
                    style={{ color: "black", fontWeight: 400 }}
                    to={setting.path}
                  >
                    {setting.title}
                  </Link>
                </MenuItem>
              ))}
<<<<<<< HEAD
              <MenuItem sx={{ ":hover": { bgcolor: "transparent" } }}>
                <Button variant="contained" onClick={logoutHandler}>Logout</Button>
              </MenuItem>
            </Menu>
            {Object.keys(user).length > 0 ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    style={{ width: "100px", height: "60px" }}
                    alt="Remy Sharp"
                    src={profileImg}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Link to={"/login"}>
                <Button variant="contained" sx={{ bgcolor: "#75DBD0" }}>
                  Login/Sign up
                </Button>
              </Link>
            )}
=======
             <MenuItem sx={{":hover":{bgcolor:"transparent"}}}>
             <Button variant="contained">Logout</Button>
             </MenuItem>
            </Menu>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
                <Avatar style={{width:"100px",height:"60px"}} alt="Remy Sharp" src={profileImg} />
              </IconButton>
            </Tooltip>
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;

import { useState } from "react";

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
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import profileImg from "../assets/profileImg.png";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { ServerDomain } from "../constant/ServerDomain";
import { IoCloseOutline, IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

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
        navigate("/");
        logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#75DBD0",
        paddingX: { sm: "50px", xs: "10px" },
        paddingY: "15px",
      }}
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
              display: "flex",
              position: { sm: "static", xs: "absolute" },
              left: isOpen ? "0" : "-100%",
              transition: "0.3s",
              top: "0px",
              height: { sm: "auto", xs: "100vh" },
              width: { sm: "auto", xs: "60%" },
              backgroundColor: { sm: "transparent", xs: "white" },
              gap: { sm: "40px", xs: "20px" },
              alignItems: { sm: "center", xs: "flex-start" },
              flexDirection: { sm: "row", xs: "column" },
              padding: { sm: "0", xs: "30px 20px" },
              zIndex: 9999,
            }}
            style={{ marginLeft: 0 }}
          >
            <Box onClick={() => setIsOpen(false)} sx={{ display: { sm: "none", xs: "block" } }}>
              <IoCloseSharp
                color="black"
                fontSize={"30px"}
                style={{
                  position: "absolute",
                  right: 20,
                  top: 20,
                }}
              />
            </Box>
            {pages.map((page, i) => (
              <Link key={i} onClick={handleCloseNavMenu} to={page.path}>
                <Typography
                  sx={{ color: { sm: "white", xs: "#212121" } }}
                  style={{ margin: 0, paddingTop: 0 }}
                >
                  {page.title}
                </Typography>
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
              {settings.map((setting, i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Link
                    style={{ color: "black", fontWeight: 400 }}
                    to={setting.path}
                  >
                    {setting.title}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem sx={{ ":hover": { bgcolor: "transparent" } }}>
                <Button variant="contained" onClick={logoutHandler}>
                  Logout
                </Button>
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
            <MenuIcon
              sx={{ display: { sm: "none", xs: "inline-block" } }}
              fontSize="large"
              onClick={() => setIsOpen(true)}
            />
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;

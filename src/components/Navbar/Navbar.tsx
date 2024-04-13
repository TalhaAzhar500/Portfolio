"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { MessageRounded } from "@mui/icons-material";
import Logo from "../../../public/TA-svg.png";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

const pages = ["Home", "Projects", "About"];

const NavBar = () => {
  const isMd = useMediaQuery((theme: any) => theme.breakpoints.up("md"));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              style={{
                display: "flex",
                marginRight: 1,
                width: "70px",
                height: "70px",
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Drawer will come here */}
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Link href="/">
              <Tooltip title="Home">
                <Typography
                  sx={{
                    m: 2,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "var(--color-1)",
                  }}
                >
                  Home
                </Typography>
              </Tooltip>
            </Link>
            {/* <Link href="/projects">
              <Typography
                sx={{ m: 2, color: "black", fontSize: "18px", fontWeight: 600 }}
              >
                Projects
              </Typography>
            </Link> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Contact">
              <Link href={"/contact"}>
                <IconButton sx={{ p: 0 }}>
                  <MessageRounded />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

"use client";
import { Box, Typography } from "@mui/material";
import Btn from "../Common/Buttons/Btn";
import styles from "./styles.module.css";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  const fakeClick = () => {
    console.log("clicked");
  };
  return (
    <Box className={styles.mainBox}>
      <Box>
        <Typography className={styles.heading}>
          Interested in working together{" "}
          <span style={{ color: "var(--color-1)" }}>?</span>
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Link href={"/contact"}>
            <Btn
              text="Get In Touch"
              onClick={() => fakeClick()}
              marginRight="20px"
              color="var(--color-1)"
            />
          </Link>
          <Link href={"/"}>
            <Btn
              text="Hire Me"
              onClick={() => fakeClick()}
              marginRight="20px"
              color="var(--text-color-1)"
            />
          </Link>
        </Box>
      </Box>
      <Box className={styles.rightBox}>
        <Box className={styles.socialBox}>
          <Link href={"https://www.instagram.com/__talhaazhar/"}>
            <Instagram className={styles.social} />
          </Link>
          <Link href={"https://www.linkedin.com/in/talha-azhar-167130269/"}>
            <LinkedIn className={styles.social} />
          </Link>
          <Link href={"https://github.com/TalhaAzhar500"}>
            <GitHub className={styles.social} />
          </Link>
        </Box>
        <Typography sx={{ color: "var(--text-color-2)" }}>
          ©2024 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

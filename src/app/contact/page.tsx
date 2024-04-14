"use client";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Me from "../../../public/profile-pic.png";
import Btn from "@/components/Common/Buttons/Btn";
import styles from "./styles.module.css";
import { EmailOutlined, Phone } from "@mui/icons-material";

const Contact = () => {
  const fakeClick = () => {
    console.log("hi");
  };

  return (
    <Box className={styles.mainBox}>
      <Box className={styles.subBox}>
        <Typography variant="h1" className={styles.h1}>
          Get In Touch<span style={{ color: "var(--color-1)" }}>.</span>
        </Typography>
        <Typography className={styles.p} sx={{ marginTop: "10px" }}>
          Looking to partner or work together? Reach out through the form and
          I'll get back to you in the next 24 hours
        </Typography>
        <Box className={styles.contactBox}>
          <a
            href="mailto:talhaazhar500@gmail.com"
            className={styles.contactInnerBox}
          >
            <IconButton className={styles.iconBtn}>
              <EmailOutlined />
            </IconButton>
            <Typography className={styles.text}>
              talhaazhar500@gmail.com
            </Typography>
          </a>
          <a href="tel:+923361032687" className={styles.contactInnerBox}>
            <IconButton className={styles.iconBtn}>
              <Phone />
            </IconButton>
            <Typography className={styles.text}>+92 336 1032987</Typography>
          </a>
        </Box>
      </Box>
      <Box className={styles.subBox}>
        <Box className={styles.imageBox}>
          <Image src={Me} alt="A picture of me" className={styles.image} />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

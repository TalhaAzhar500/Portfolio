"use client";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Image from "next/image";
import Me from "../../../../public/profile-pic.png";
import Btn from "@/components/Common/Buttons/Btn";
import Link from "next/link";

const HeroSection = () => {
  const fakeClick = () => {
    console.log("hi");
  };

  return (
    <Box className={styles.main}>
      <Box className={styles.subBox}>
        <Typography className={styles.p}>Hey, I'm Talha 👋🏻</Typography>
        <Typography variant="h1" className={styles.h1}>
          <span style={{ color: "var(--color-1)" }}>React</span> JS Developer
        </Typography>
        <Typography className={styles.p} sx={{ marginTop: "10px" }}>
          I'm a frontend developer based in Lahore,PK, I'll help you build
          beautiful websites your users will love.
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
      <Box className={styles.subBox}>
        <Box className={styles.imageBox}>
          <Image src={Me} alt="A picture of me" className={styles.image} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

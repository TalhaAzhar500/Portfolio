import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";

const MyStory = () => {
  return (
    <Box className={styles.mainBox}>
      <Typography variant="h1" className={styles.mainHeading}>
        My Story<span className={styles.dot}>.</span>
      </Typography>
      <Box>
        <Typography className={styles.text}>
          My journey as a front-end developer started back in 2010, working as a
          freelancer for clients all over the world for several years.
        </Typography>
        <Typography className={styles.text}>
          After being on my own for a while, I decided to enter the corporate
          world, and I started working as a software developer at Webflow, the
          same platform I was using with my freelance clients.
        </Typography>
        <Typography className={styles.text}>
          After some exciting months of work at Webflow, I decided to transition
          to Stripe, where I returned what I love: front-end development.{" "}
        </Typography>
        <Typography className={styles.text}>
          My success quickly compounded I started receiving job offers from the
          biggest names in the industry.
        </Typography>
        <Typography className={styles.text}>
          All these opportunities led me to travel the world. Eventually,
          however, I decided to settle down for a more calm and simple routine,
          and I'm now working at Apple. And you know what? I love what I do! 💜
        </Typography>
      </Box>
    </Box>
  );
};

export default MyStory;

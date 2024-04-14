import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";

const About = () => {
  return (
    <Box className={styles.mainBox}>
      <Box className={styles.leftBox}>
        <Box className={styles.leftInnerBox}>
          <Box className={styles.titleBox}>
            <Typography className={styles.leftTitle}>Client</Typography>
            <Typography className={styles.leftDesc}>Deneke</Typography>
          </Box>
          <Box className={styles.titleBox}>
            <Typography className={styles.leftTitle}>Year</Typography>
            <Typography className={styles.leftDesc}>2023</Typography>
          </Box>
        </Box>
        <Box>
          <Typography className={styles.leftTitle}>My Role</Typography>
          <Typography className={styles.leftDesc}>
            Frontend Developer
          </Typography>
        </Box>
      </Box>
      <Box className={styles.rightBox}>
        <Typography className={styles.title}>About</Typography>
        <Typography className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda
          asperiores alias dicta nam quibusdam minus cum id animi excepturi quos
          explicabo facilis itaque, enim culpa a ad voluptas autem earum placeat
          sed necessitatibus! Laboriosam cum quia, soluta unde recusandae est
        </Typography>
        <Typography className={styles.desc2}>
          dicta explicabo odio quaerat nam minima amet facere ut ratione
          voluptas inventore accusantium nemo doloremque assumenda illo, vel id.
          Deleniti quam dolore obcaecati aliquid voluptatum suscipit, ullam
          illo, minus ducimus voluptatibus quisquam, facere eveniet!
        </Typography>
        <Typography className={styles.title}>Our Client</Typography>
        <Typography className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda
          asperiores alias dicta nam quibusdam minus cum id animi excepturi quos
          explicabo facilis itaque, enim culpa a ad voluptas autem earum placeat
          sed necessitatibus! Laboriosam cum quia, soluta unde recusandae est
        </Typography>
        <Typography className={styles.desc2}>
          dicta explicabo odio quaerat nam minima amet facere ut ratione
          voluptas inventore accusantium nemo doloremque assumenda illo, vel id.
          Deleniti quam dolore obcaecati aliquid voluptatum suscipit, ullam
          illo, minus ducimus voluptatibus quisquam, facere eveniet!
        </Typography>
        <Typography className={styles.title}>Challenges</Typography>
        <Typography className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda
          asperiores alias dicta nam quibusdam minus cum id animi excepturi quos
          explicabo facilis itaque, enim culpa a ad voluptas autem earum placeat
          sed necessitatibus! Laboriosam cum quia, soluta unde recusandae est
        </Typography>
        <Typography className={styles.desc2}>
          dicta explicabo odio quaerat nam minima amet facere ut ratione
          voluptas inventore accusantium nemo doloremque assumenda illo, vel id.
          Deleniti quam dolore obcaecati aliquid voluptatum suscipit, ullam
          illo, minus ducimus voluptatibus quisquam, facere eveniet!
        </Typography>
        <Typography className={styles.title}>Results</Typography>
        <Typography className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda
          asperiores alias dicta nam quibusdam minus cum id animi excepturi quos
          explicabo facilis itaque, enim culpa a ad voluptas autem earum placeat
          sed necessitatibus! Laboriosam cum quia, soluta unde recusandae est
        </Typography>
        <Typography className={styles.desc2}>
          dicta explicabo odio quaerat nam minima amet facere ut ratione
          voluptas inventore accusantium nemo doloremque assumenda illo, vel id.
          Deleniti quam dolore obcaecati aliquid voluptatum suscipit, ullam
          illo, minus ducimus voluptatibus quisquam, facere eveniet!
        </Typography>
      </Box>
    </Box>
  );
};

export default About;

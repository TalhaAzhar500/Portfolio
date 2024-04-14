import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";

const Skills = () => {
  return (
    <Box className={styles.mainBox}>
      <Typography variant="h1" className={styles.mainHeading}>
        Skills<span className={styles.dot}>.</span>
      </Typography>
      <Box className={styles.innerBox}>
        <Box className={styles.subBoxes}>
          <Typography className={styles.subHeading}>Frontend</Typography>
          <Typography className={styles.text}>Html</Typography>
          <Typography className={styles.text}>Css</Typography>
          <Typography className={styles.text}>JavaScript</Typography>
          <Typography className={styles.text}>TypeScript</Typography>
        </Box>
        <Box className={styles.subBoxes}>
          <Typography className={styles.subHeading}>-</Typography>
          <Typography className={styles.text}>React Js</Typography>
          <Typography className={styles.text}>Next Js</Typography>
          <Typography className={styles.text}>Angular</Typography>
          <Typography className={styles.text}>Vue Js</Typography>
        </Box>
        <Box className={styles.subBoxes}>
          <Typography className={styles.subHeading}>-</Typography>
          <Typography className={styles.text}>Material UI</Typography>
          <Typography className={styles.text}>Chakra UI</Typography>
          <Typography className={styles.text}>Tailwind</Typography>
          <Typography className={styles.text}>Bootstrap</Typography>
        </Box>
        <Box className={styles.subBoxes}>
          <Typography className={styles.subHeading}>-</Typography>
          <Typography className={styles.text}>UI/UX</Typography>
          <Typography className={styles.text}>Redux</Typography>
          <Typography className={styles.text}>Git</Typography>
          <Typography className={styles.text}>Responsive design</Typography>
        </Box>
        <Box className={styles.subBoxes}>
          <Typography className={styles.subHeading}>Soft Skills</Typography>
          <Typography className={styles.text}>
            Team work & Collaboration
          </Typography>
          <Typography className={styles.text}>Problem-solving</Typography>
          <Typography className={styles.text}>Resilience</Typography>
          <Typography className={styles.text}>Fast learner</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;

import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import TabSection from "./TabSection";

const Experience = () => {
  return (
    <Box className={styles.mainBox}>
      <Typography variant="h1" className={styles.mainHeading}>
        Experience<span className={styles.dot}>.</span>
      </Typography>
      <Box className={styles.innerBox}>
        <TabSection />
      </Box>
    </Box>
  );
};

export default Experience;

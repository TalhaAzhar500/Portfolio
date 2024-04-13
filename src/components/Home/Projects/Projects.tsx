import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Outbound from "@/components/Common/Buttons/OutBound";
import Image from "next/image";
import qibble1 from "../../../../public/Qibble/Qibble1.png";
import ROI1 from "../../../../public/ROI/ROI1.png";
import Project from "@/components/Common/ProjectBox/Project";

const Projects = () => {
  return (
    <Box className={styles.mainBox}>
      <Typography variant="h1" className={styles.mainHeading}>
        Projects<span className={styles.dot}>.</span>
      </Typography>
      <Box className={styles.innerBox}>
        {/* Project 1 */}
        <Project
          boxStyle="projectBox1"
          imgStyle="projectImg1"
          src={qibble1}
          alt="qibble-pic"
          title="Qibble"
          link="/projects/qibble"
          desc="Dive into the world of interactive polls, voting, and sharing opinions
        through a fully immersive platform."
        />

        {/* Project 2 */}
        <Project
          boxStyle="projectBox2"
          imgStyle="projectImg2"
          src={ROI1}
          alt="ROI-pic"
          title="ROI"
          link="/projects/roi"
          desc="Dive into the world of interactive polls, voting, and sharing opinions
        through a fully immersive platform."
        />
      </Box>
    </Box>
  );
};

export default Projects;

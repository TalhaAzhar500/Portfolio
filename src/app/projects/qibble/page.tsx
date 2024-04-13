import { Box, Tooltip, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Outbound from "@/components/Common/Buttons/OutBound";
import Image from "next/image";
import qibble1 from "../../../../public/Qibble/Qibble1.png";
import qibble2 from "../../../../public/Qibble/Qibble2.png";
import qibble3 from "../../../../public/Qibble/Qibble3.png";
import qibble4 from "../../../../public/Qibble/Qibble4.png";
import qibble5 from "../../../../public/Qibble/Qibble5.png";
import roi from "../../../../public/ROI/ROI1.png";
import About from "./_components/About";
import Review from "@/components/Common/Review/Review";
import Project from "@/components/Common/ProjectBox/Project";

const Qibble = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.titleBox}>
        <Typography variant="h1" className={styles.mainHeading}>
          Qibble
          <span className={styles.dot}>.</span>
        </Typography>
        <Tooltip title="Visit project">
          <Outbound
            link="https://qibble-fe2-ee6c625d4ad4.herokuapp.com/"
            height="40px"
            width="40px"
            tab="new"
          />
        </Tooltip>
      </Box>
      <Box>
        <Typography className={styles.desc}>
          Dive into the world of interactive polls, voting, and sharing opinions
          through a fully immersive platform.
        </Typography>
      </Box>
      <Box className={styles.imgBox}>
        <Box className={styles.innerImgBox}>
          <Image src={qibble1} alt="qibble-pic-1" className={styles.img1} />
          <Image src={qibble2} alt="qibble-pic-2" className={styles.img1} />
          {/* <Image src={qibble3} alt="qibble-pic-3" className={styles.img1} /> */}
        </Box>
      </Box>
      <About />
      <Box className={styles.downImgBox}>
        <Box className={styles.downImgBoxes}>
          <Image src={qibble1} alt="qibble-pic-1" className={styles.img1} />
        </Box>
        <Box className={styles.downImgBoxes}>
          <Image src={qibble2} alt="qibble-pic-2" className={styles.img1} />
        </Box>
      </Box>
      <Box className={styles.downImgBoxes}>
        <Image src={qibble3} alt="qibble-pic-3" className={styles.img1} />
        <Image src={qibble4} alt="qibble-pic-4" className={styles.img1} />
        <Image src={qibble5} alt="qibble-pic-5" className={styles.img1} />
      </Box>
      <Box className={styles.reveiwBox}>
        <Review
          review={`"I had the pleasure of working with Talha on a recent project, and I was
        blown away by their creativity and attention to detail. I highly
        recommend Talha for anyone looking for a talented and professional
        designer."`}
          title="Deneke"
        />
      </Box>
      <Box className={styles.projectBox}>
        <Typography variant="h1" className={styles.mainHeading2}>
          More Projects<span className={styles.dot}>.</span>
        </Typography>
        <Project
          boxStyle="projectBox2"
          imgStyle="projectImg2"
          src={roi}
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

export default Qibble;

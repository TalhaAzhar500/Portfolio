import { Box, Typography } from "@mui/material";
import styles from "../style.module.css";
import Outbound from "@/components/Common/Buttons/OutBound";
import Image from "next/image";
import Link from "next/link";

interface projectProps {
  boxStyle: string;
  imgStyle: string;
  src: any;
  alt: string;
  title: string;
  link: string;
  desc: string;
}

const Project: React.FC<projectProps> = ({
  boxStyle,
  imgStyle,
  src,
  alt,
  title,
  link,
  desc,
}) => {
  return (
    <Box className={styles[boxStyle]}>
      <Box className={styles.projectImgBox}>
        <Link href={link}>
          <Image src={src} alt={alt} className={styles[imgStyle]} />
        </Link>
      </Box>
      <Box className={styles.projectTitleBox}>
        <Typography className={styles.projectTitle}>{title}</Typography>
        <Outbound link={link} />
      </Box>
      <Typography className={styles.projectDesc}>{desc}</Typography>
    </Box>
  );
};

export default Project;

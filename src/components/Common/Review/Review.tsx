import { Avatar, Box, Typography } from "@mui/material";
import styles from "../style.module.css";

interface reviewProps {
  review: string;
  avatar?: string;
  title: string;
  subTitle?: string;
}

const Review: React.FC<reviewProps> = ({ review, avatar, title, subTitle }) => {
  return (
    <Box className={styles.reviewBox}>
      <Typography className={styles.reviewText}>{review}</Typography>
      <Box className={styles.reviewUserBox}>
        <Avatar className={styles.reviewUserAvatar}>a</Avatar>
        <Box>
          <Typography className={styles.reviewUserTitle}>{title}</Typography>
          <Typography className={styles.reviewUserSubTitle}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;

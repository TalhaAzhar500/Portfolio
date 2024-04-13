"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import { Done } from "@mui/icons-material";
import experiences from "./Experiences.json";

interface TabPanelProps {
  children?: any;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={styles.tabPanel}>
          <Typography className={styles.panelHeading}>
            {children.role}{" "}
            <span style={{ color: "var(--color-1)" }}>
              @ {children.company}
            </span>
          </Typography>
          <Typography className={styles.panelSubHeading}>
            {children.date}
          </Typography>
          <Box className={styles.innerPanel}>
            {children.points.map((point: any, index: number) => (
              <Typography className={styles.panelText} key={index}>
                <Done className={styles.tick} />
                {point}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}

const TabSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }} className={styles.mainTabBox}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        textColor="inherit"
        sx={{
          position: "relative",
          height: "fit-content",
          ".MuiTabs-indicator": {
            left: 0,
            width: "3px",
            backgroundColor: "var(--color-1)",
            zIndex: 999,
          },
          "& .Mui-selected": {
            color: "var(--color-1)",
          },
        }}
      >
        {experiences?.map((experience: any, index: number) => (
          <Tab
            disableRipple
            label={experience.company}
            className={styles.tab}
            key={index}
          />
        ))}
        <div className={styles.line} />
      </Tabs>
      {experiences?.map((experience: any, index: number) => (
        <TabPanel value={value} index={index} key={index}>
          {experience}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabSection;

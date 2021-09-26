import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import SignUp from "./SignUp";
import SignUpTwo from "./SignUpTwo";
import "./SignUpSignIn.css";

function SignUpSignSignIn() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Step 1" />
        <Tab label="Step 2" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignUp />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpTwo />
      </TabPanel>
    </Paper>
  );
}

export default SignUpSignSignIn;

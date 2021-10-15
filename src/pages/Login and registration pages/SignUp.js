import React from "react";
import "./SignUp.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [signUp, setSignUp] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: signUp.email,
      email: signUp.email,
      password: signUp.password,
      firstName: signUp.firstName,
      phone: signUp.phone,
      lastName: signUp.lastName,
      marketing_emails: signUp.marketing_emails,
    };
    console.log("newUser1", newUser);
    try {
      const response = await axios.post(
        "http://localhost:1337/auth/local/register",
        newUser
      );
    } catch (error) {
      console.log(error);
    }
    console.log("newUser2", newUser);

    setSignUp({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <Container className="sign-up__container" component="main" maxWidth="xs">
      <CssBaseline />
      <div className="sign-up__form">
        <Avatar className="sign-up__icon">
          <LockOutlinedIcon />
        </Avatar>
        <Typography className="sign-up__heading" component="h1" variant="h5">
          Welcome to Swoop
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid className="sign-up__input" item xs={12} sm={6}>
              <TextField
                className="sign-up__input"
                autoComplete="off"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                value={signUp.firstName}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="off"
                value={signUp.lastName}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="off"
                value={signUp.email}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                label="Phone"
                name="phone"
                autoComplete="off"
                value={signUp.phone}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="off"
                value={signUp.password}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className="sign-up__form-label"
                control={<Checkbox color="primary" />}
                label="I want to receive marketing messages from Swoop."
                onChange={handleInput}
                value="true"
                name="marketing_emails"
              />
            </Grid>
          </Grid>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Agree and Continue
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={10}></Box>
    </Container>
  );
}

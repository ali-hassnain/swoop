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
  const [user, setUser] = useState([]);
  const [signUp, setSignUp] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...signUp, id: new Date().getTime().toString() };
    setUser([...user, newUser]);
    signUp({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
    console.log(user);
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
                autoComplete="fname"
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
                autoComplete="lname"
                value={signUp.lastName}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                value={signUp.email}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone"
                name="phone"
                autoComplete="phone"
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
                autoComplete="current-password"
                value={signUp.password}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className="sign-up__form-label"
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive marketing messages from Swoop."
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
        <div>
          {user.map((curElem) => {
            return (
              <div>
                <p>{curElem.firstName}</p>
                <p>{curElem.lastName}</p>
                <p>{curElem.email}</p>
                <p>{curElem.phone}</p>
                <p>{curElem.password}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Box mt={10}></Box>
    </Container>
  );
}

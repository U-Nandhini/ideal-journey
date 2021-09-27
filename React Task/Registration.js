import React from "react";

import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";

const paperStyle = {
  padding: 40,
  height: "50vh",
  width: 400,
  margin: "100px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  handleChange(event) {
    let inputs = this.state.inputs;
    inputs[event.target.name] = event.target.value;
    this.setState({ inputs });
  }

  submitRegistration(event) {
    event.preventDefault();
    if (this.validateForm()) {
      let inputs = {};
      inputs["username"] = "";
      inputs["emailid"] = "";
      inputs["mobileno"] = "";
      inputs["password"] = "";
      this.setState({ inputs: inputs });
      alert("Form submitted");
    }
  }

  validateForm() {
    let inputs = this.state.inputs;
    let errors = {};
    let formIsValid = true;

    if (!inputs["username"]) {
      formIsValid = false;
      errors["username"] = "**Please enter your username.";
    }

    if (typeof inputs["username"] !== "undefined") {
      if (!inputs["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!inputs["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof inputs["emailid"] !== "undefined") {
      var pattern = new RegExp(/^([a-zA-Z0-9\._]+)@(gmail).(com)$/);
      if (!pattern.test(inputs["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!inputs["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof inputs["mobileno"] !== "undefined") {
      if (!inputs["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!inputs["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof inputs["password"] !== "undefined") {
      if (
        !inputs["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Sign UP</h2>
          </Grid>
          <TextField
            label="Name"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            value={this.state.inputs.username}
            placeholder="Enter username"
            fullWidth
            required
          />
          <div className="errorMsg">{this.state.errors.username}</div>

          <TextField
            label="password"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            value={this.state.inputs.password}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <div className="errorMsg">{this.state.errors.password}</div>

          <TextField
            label="EMail ID"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            value={this.state.inputs.emailid}
            placeholder="Enter EmailID"
            fullWidth
            required
          />
          <div className="errorMsg">{this.state.errors.emailid}</div>

          <TextField
            label="Mobile Number"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            value={this.state.inputs.mobileno}
            placeholder="Enter MobileNumber"
            fullWidth
            required
          />
          <div className="errorMsg">{this.state.errors.mobileno}</div>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={this.submitRegistration}
          >
            submit
          </Button>

          <Typography>
            {" "}
            Already have an account ?<Link to=" /Login">Sign in</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}
export default Registration;

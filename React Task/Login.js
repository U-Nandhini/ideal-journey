import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
//import FormControlLabel from '@material-ui/core/FormControlLabel';
const paperStyle = {
  padding: 40,
  height: "50vh",
  width: 280,
  margin: "100px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.SubmitLogin = this.SubmitLogin.bind(this);
  }
  handleChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields,
    });
  }
  SubmitLogin(event) {
    event.preventDefault();

    this.props.history.push("/UserDetails");
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
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
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="username"
            onChange={this.handleChange}
            value={this.state.fields.username}
            placeholder="Enter username"
            fullWidth
            required
          />
          <div className="errorMsg">{this.state.errors.username}</div>
          <TextField
            label="password"
            onChange={this.handleChange}
            value={this.state.fields.password}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <div className="errorMsg">{this.state.errors.password}</div>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={this.SubmitLogin}
          >
            Sign in
          </Button>

          <Typography>
            {" "}
            Do you have an account ?<Link to="/Registration">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}
export default withRouter(LoginForm);

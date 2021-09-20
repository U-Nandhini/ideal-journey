import React from 'react';

class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        inputs: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitRegistration = this.submitRegistration.bind(this);

    };

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
        this.setState({inputs : inputs});
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
      
      var pattern = new RegExp(/^([a-zA-Z0-9\._]+)@(gmail).(com)$/)
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
      if (!inputs["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  render() {
    return (
    <div id="main-registration">
     <div id="register">

        <h1>Registration page</h1>

        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

        <label>Name</label>
        <input type="text" name="username" value={this.state.inputs.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>

        <label>Password</label>
        <input type="password" name="password" value={this.state.inputs.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>

        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.inputs.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>

        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.inputs.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>

        <input type="submit" className="button"  value="Register"/>

        </form>
    </div>
</div>)
  }
}
export default RegisterForm;
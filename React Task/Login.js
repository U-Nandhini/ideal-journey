import React from 'react';

class LoginForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);

    };

    handleChange(event) {
        let inputs = this.state.inputs;
        inputs[event.target.name] = event.target.value;
        this.setState({ inputs });
  }  
  
submitLogin(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let inputs = {};
        inputs["username"] = "";
        inputs["password"] = "";
        this.setState({inputs : inputs});
        alert("Login SuccessFUl");
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
 
 if (!inputs["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
  }

this.setState({
    errors: errors
  });
  return formIsValid;

  }


render()
 {
    return (
    <div id="login-main">
     <div id="loginPage">

        <h1>Registration page</h1>

        <form method="post"  name="userLogin"  onSubmit= {this.submitLogin} >

        <label>Name</label>
        <input type="text" name="username" value={this.state.inputs.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>

        <label>Password</label>
        <input type="password" name="password" value={this.state.inputs.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>

        <input type="submit" className="button"  value="Login"/>
    </form>
    </div>
    </div>)
    }
    }

      export default LoginForm;

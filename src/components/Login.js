import React from "react";
import LoginForm from "./Forms/loginForm.js"
import img from "../assets/clipboard.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="formContainer">
        <div className="formContainerInside">
          <div className="formImage"><img src={img} /></div>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login


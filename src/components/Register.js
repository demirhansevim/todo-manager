import React from "react";
import RegisterForm from "./Forms/registerForm.js"
import img from "../assets/clipboard.png";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="formContainer">
        <div className="formContainerInside">
          <div className="formImage">
            <img src={img} />
          </div>
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default Register;


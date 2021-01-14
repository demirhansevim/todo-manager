import React from 'react';
import RegisterForm from './Forms/registerForm.js'

class Register extends React.Component  {
 constructor(props){
           super(props);
        }
    render() {
        return (
		<div className="formContainer">
    <div className="formContainerInside">
      <div className="formImage">
        <img src="assets/clipboard.png" />
      </div>
      <RegisterForm handler = {this.props.handler}/>
    </div>
  </div>
		);  
    
}
}

export default Register


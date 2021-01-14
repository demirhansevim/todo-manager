import React from 'react';
import LoginForm from './Forms/loginForm.js'

class Login extends React.Component  {
 constructor(props){
           super(props);
        }
    render() {
        return (
            <div className="formContainer">
            <div className="formContainerInside">
              <div className="formImage"><img src="assets\clipboard.png" /></div>
              <LoginForm handler = {this.props.handler}/>
            </div>
          </div>
		);  
    
}
}

export default Login


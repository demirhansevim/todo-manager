import React from 'react';
import ReactDOM from 'react-dom';
import { login } from '../../scripts/utils.js'


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.inputLogin = this.inputLogin.bind(this);
  
    }	
    inputLogin() {
        var username = document.getElementById("loginUsername").value
        var password = document.getElementById("loginPassword").value
        var loginBool = login(username, password)
        if (loginBool == null || loginBool == false) {
          if (loginBool == null)
            alert("There is no user with that name.")
          if (loginBool == false)
            alert("Wrong password.")
        }

      }    
    handleClick() {
      this.inputLogin();
      this.props.handler(3)     
  }   
	render() {	   
	return(   
	<div className="formBox">
	<form onSubmit={this.handleClick.bind(this)}>
          <h2>Login</h2>
          <input type="text" className="textInput" id="loginUsername" name="username" placeholder="Enter Username" required />
          <input type="password" className="textInput" id="loginPassword" placeholder="Enter Password" required />
          <input type="submit" id="loginButton" value="Login" />
		   <p>If you don't have an account you can register here</p>
        </form>
      </div>	  
	      
            );
    }
}
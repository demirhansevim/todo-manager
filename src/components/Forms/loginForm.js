import React from 'react';
import ReactDOM from 'react-dom';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.inputLogin = this.inputLogin.bind(this);
  
    }	
	updateSession(session) {
    sessionStorage.setItem("session", JSON.stringify(session));
}
	login(username, password) {
    var user = localStorage.getItem(username);
    if (user == null)
        return null;
    user = JSON.parse(user);
    if (user.password != password)
        return false;
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = username;
    this.updateSession(session);
    return true;
}
    inputLogin() {
        var username = document.getElementById("loginUsername").value
        var password = document.getElementById("loginPassword").value
        var loginBool = this.login(username, password)
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
    <div className="panel-group">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <h2>Login</h2>
        </div>
        <div className="row">
          <input type="text" className="textInput" id="loginUsername" name="username" placeholder="Enter Username" required />
        </div>
        <div className="row">
          <input type="password" className="textInput" id="loginPassword" placeholder="Enter Password" required />
        </div>
        <div className="row">
          <input type="submit" id="loginButton" value="Login" />
        </div>
        <div className="row">
		      <p>If you don't have an account you can register here</p>
        </div>
      </div>
    </div>
    </div>
  </form>
  </div>	  
	      
            );
    }
}
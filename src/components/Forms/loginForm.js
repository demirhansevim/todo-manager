import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.inputLogin = this.inputLogin.bind(this);
  }

  /**
   * Updates the current session information in the session storage.
   * @param {Session} session 
   */
  updateSession(session) {
    sessionStorage.setItem("session", JSON.stringify(session));
  }

  /**
   * Logs a user in the session. If there is no user with the given username,
   * returns null; if the given password is incorrect, returns false; else returns
   * true.
   * @param {string} username 
   * @param {string} password 
   */
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

  /**
   * Alerts the user if not logged in. Otherwise updates the page.
   */
  inputLogin() {
    var username = document.getElementById("loginUsername").value
    var password = document.getElementById("loginPassword").value
    var loginBool = this.login(username, password)
    if (loginBool == null || loginBool == false) {
      if (loginBool == null)
        alert("There is no user with that name.")
      if (loginBool == false)
        alert("Wrong password.")
    } else
      this.props.handler(3)
  }

  handleClick(event) {
    event.preventDefault();
    this.inputLogin();
  }

  render() {
    return (
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
                  <p>If you don't have an account you can register <a href="#" onClick={() => this.props.handler(1)}>here</a></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
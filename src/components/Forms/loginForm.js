import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Container, Form, Row, Input } from "reactstrap"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var loginBool = this.login(username, password);
    if (loginBool == null || loginBool == false) {
      if (loginBool == null)
        alert("There is no user with that name.");
      if (loginBool == false)
        alert("Wrong password.");
    } else
      this.props.history.push("/todo");
  }

  /**
   * Handles the click event of submit button.
   * @param {MouseEvent} event 
   */
  handleClick(event) {
    event.preventDefault();
    this.inputLogin();
  }

  render() {
    return (
      <Container className="formBox">
        <Form onSubmit={this.handleClick.bind(this)}>
          <div>
            <Row>
              <h2>Login</h2>
            </Row>
            <Row>
              <Input type="text" className="textInput" id="loginUsername" name="username" placeholder="Enter Username" required />
            </Row>
            <Row>
              <Input type="password" className="textInput" id="loginPassword" placeholder="Enter Password" required />
            </Row>
            <Row>
              <Input type="submit" id="loginButton" value="Login" />
            </Row>
            <Row>
              <p>If you don't have an account you can register <a href="" onClick={e => { e.preventDefault(); this.props.history.push("/register"); }}>here</a></p>
            </Row>
          </div>
        </Form>
      </Container>
    );
  }
}

export default withRouter(LoginForm);
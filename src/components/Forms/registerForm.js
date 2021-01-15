import React from 'react';
import User from '../user.js';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordcheck: '',
      birthday: '',
      gender: '',
      check: ''
    };
    this.inputRegister = this.inputRegister.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  /**
   * Updates the user in the local storage.
   * @param {User} user 
   */
  updateUser(user) {
    localStorage.setItem(user.username, JSON.stringify(user));
  }

  /**
   * Updates the current session information in the session storage.
   * @param {Session} session 
   */
  updateSession(session) {
    sessionStorage.setItem("session", JSON.stringify(session));
  }

  /**
   * Creates a new user with the given username and password. Returns true
   * if the process was successful. Otherwise, returns false.
   * @param {string} username 
   * @param {string} password 
   * @param {string} email 
   * @param {Date} birthDate 
   * @param {boolean} gender 
   */
  register(username, password, email, birthDate, gender) {
    if (localStorage.getItem(username) != null)
      return false;
    var user = new User(username, password, email, birthDate, gender);
    this.updateUser(user);
    return true;
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
   * Alerts the user if not registered. Otherwise updates the page.
   */
  inputRegister() {
    var username = document.getElementById("registerUsername").value
    var password = document.getElementById("registerPassword").value
    var checkpassword = document.getElementById("checkPassword").value
    var email = document.getElementById("registerMail").value
    var birthday = document.getElementById("registerBirthday").value
    var gender = document.getElementsByName('registerGender')
    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked)
        gender = gender[i].value
    }
    var registerBool = this.register(username, password, email, birthday, gender)
    if (password == checkpassword) {
      if (registerBool) {
        this.login(username, password)
        this.props.handler(3);
        return true;
      } else {
        alert("That user already exists.")
        return false;
      }
    } else {
      alert("Passwords don't match")
      return false;
    }
  }

  /**
   * Returns if password is valid or not.
   */
  passwordValidation() {
    if (this.state.password != this.state.passwordcheck) {
      if (this.state.passwordcheck != "") {
        this.state.check = 'Your passwords do not match';
      }
      else
        this.state.check = "";
    }
    else
      this.state.check = "";
  }

  handleClick(event) {
    event.preventDefault();
    this.inputRegister();
  }

  render() {
    return (
      <div className="formBox">
        <form onSubmit={this.handleClick.bind(this)}>
          <h2>Register</h2>
          <div className="panel-group">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row">
                  <input type="text" id="registerUsername" placeholder="Enter Username" required />
                </div>
                <div className="row">
                  <input type="email" id="registerMail" placeholder="Enter E-mail" required />
                </div>
                <div className="row">
                  <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} type="password" id="registerPassword" placeholder="Enter Password" required />
                </div>
                <div className="row">
                  <input value={this.state.passwordcheck} onChange={e => this.setState({ passwordcheck: e.target.value })} type="password" id="checkPassword" placeholder="Enter Password Again" onKeyUp={this.passwordValidation()} required />
                </div>
                <div className="row">
                  <span class="span-text-color">{this.state.check}</span>
                </div>
                <div className="row">
                  <input type="date" id="registerBirthday" placeholder="Enter Birthday" required />
                </div><br />
                <div className="row">
                  <div className="col-md-3">
                    <label className="genderText" htmlFor="genderMale">Male <input type="radio" id="genderMale" name="registerGender" value="Male" required /></label><br />
                  </div>
                  <div className="col-md-3">
                    <label className="genderText" htmlFor="genderFemale">Female <input type="radio" id="genderFemale" name="registerGender" value="Female" /></label><br />
                  </div>
                </div>
                <div className="row">
                </div>
                <div className="row">
                </div>
                <div className="row">
                  <input type="submit" value="Submit" id="registerButton" />
                </div>
                <div className="row">
                  <p>If you already have an account you can login <a href="#" onClick={() => this.props.handler(2)}>here</a></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
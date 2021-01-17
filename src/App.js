import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./bootstrap.css";
import "./App.css";
import "./todoStyle.css";
import Register from "./components/Register"
import Login from "./components/Login"
import MainPage from "./components/mainPage.js"
import ToDo from "./components/ToDo"
import Session from "./components/session.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Initializes the session information if does not exist in the session storage.
   */
  initSession() {
    if (sessionStorage.getItem("session") == null) {
      var session = new Session();
      sessionStorage.setItem("session", JSON.stringify(session));
    }
  }

  render() {
    this.initSession();
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todo" component={ToDo} />
            <Route path="*" component={MainPage} />
          </Switch>
        </BrowserRouter>
        <Footer isFixed={true} />
      </div>
    );
  }
}

export default App;
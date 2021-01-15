import React from 'react';
import './bootstrap.css';
import './App.css';
import './todoStyle.css';
import Register from './components/Register'
import Login from './components/Login'
import MainPage from './components/mainPage.js'
import ToDo from './components/ToDo'
import Session from './components/session.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.handler = this.handler.bind(this);
  }

  handler(page) {
    this.setState({
      page: page
    });
  }

  initSession() {
    if (sessionStorage.getItem("session") == null) {
      var session = new Session();
      sessionStorage.setItem("session", JSON.stringify(session));
    }
  }

  render() {
    this.initSession();
    if (this.state.page == 0)
      return <MainPage handler={this.handler} />;
    else if (this.state.page == 1)
      return <Register handler={this.handler} />;
    else if (this.state.page == 2)
      return <Login handler={this.handler} />;
    else
      return <ToDo handler={this.handler} />;
  }
}

export default App;
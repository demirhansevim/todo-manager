import React from "react";
import List from "./List.js";
import { withRouter } from "react-router-dom";
import { Button, Container, Input } from "reactstrap";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.init(),
      listName: "",
      switch: true
    };
    this.getUser = this.getUser.bind(this);
    this.renderInvoke = this.renderInvoke.bind(this);
    this.handleRemoveList = this.handleRemoveList.bind(this);
    this.handleNewList = this.handleNewList.bind(this);
  }

  /**
   * Invokes render.
   */
  renderInvoke() {
    this.setState({ switch: !this.state.switch });
  }

  /**
   * Returns the logged in user object instance.
   */
  getUser() {
    return this.state.user;
  }

  /**
   * Updates the logged in user's information in the local storage.
   */
  saveUser() {
    localStorage.setItem(this.state.user.username, JSON.stringify(this.state.user));
  }

  /**
   * Updates the current session information in the session storage.
   * @param {Session} session 
   */
  updateSession(session) {
    sessionStorage.setItem("session", JSON.stringify(session));
  }

  /**
   * Logs the user out of the system and updates the session information.
   */
  logout() {
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = null;
    this.updateSession(session);
    this.props.history.push("/");
  }

  /**
   * Creates a new list and invokes render.
   */
  handleNewList() {
    if (this.state.listName.length == 0) {
      alert("List name cannot be empty.");
      return;
    }
    var id = -1;
    for (var i = 0; i <= this.state.user.lists.length; ++i) {
      var exists = false;
      for (var j = 0; !exists && j < this.state.user.lists.length; ++j) {
        if (this.state.user.lists[j].id.split("l")[1] == i)
          exists = true;
      }
      if (!exists) {
        id = i;
        break;
      }
    }
    id = "l" + id;
    this.state.user.lists.push({ id: id, name: this.state.listName, tasks: [] });
    this.state.listName = "";
    this.renderInvoke();
  }

  /**
   * Removes the list with the given id and invokes render.
   * @param {string} id 
   */
  handleRemoveList(id) {
    for (var i = 0; i < this.state.user.lists.length; ++i) {
      if (this.state.user.lists[i].id == id) {
        this.state.user.lists.splice(i, 1);
        break;
      }
    }
    this.renderInvoke();
  }

  /**
   * Initializes the ToDoManager and returns the logged in user object instance.
   */
  init() {
    var username = JSON.parse(sessionStorage.getItem("session")).user;
    return JSON.parse(localStorage.getItem(username));
  }

  render() {
    this.saveUser();
    var lists = [];
    for (var i = 0; i < this.state.user.lists.length; ++i) {
      lists.push(<List id={this.state.user.lists[i].id} name={this.state.user.lists[i].name} getUser={this.getUser} removeListHandler={this.handleRemoveList} renderInvokeHandler={this.renderInvoke} />);
    }
    return (
      <div>
        <Button className="button" id="logout" onClick={this.logout.bind(this)}>Logout</Button>
        <Container>
          <Container className="text-center">
            <Input className="textInput" type="text" id="newListName" placeholder="New List" value={this.state.listName} onChange={e => this.setState({ listName: e.target.value })} onKeyDown={e => { if (e.keyCode == 13) { this.handleNewList(); } }} />
            <Button className="button addButton" id="listButton" onClick={this.handleNewList}>Add New List</Button>
          </Container>
        </Container>
        <div id="lists"> {lists} </div>
      </div>
    );
  }
}

export default withRouter(ToDo);
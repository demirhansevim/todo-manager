import React from 'react';
import List from './List.js';
import { init } from "../scripts/utils.js";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: init(),
      listName: "",
      switch: true
    };
    this.getUser = this.getUser.bind(this);
    this.renderInvoke = this.renderInvoke.bind(this);
    this.handleRemoveList = this.handleRemoveList.bind(this);
    this.handleNewList = this.handleNewList.bind(this);
  }

  renderInvoke() {
    this.setState({ switch: !this.state.switch });
  }

  getUser() {
    return this.state.user;
  }

  saveUser() {
    localStorage.setItem(this.state.user.username, JSON.stringify(this.state.user));
  }

  handleNewList() {
    var id = -1;
    for (var i = 0; i <= this.state.user.lists.length; ++i) {
      var exists = false;
      for (var j = 0; !exists && j < this.state.user.lists.length; ++j) {
        if (this.state.user.lists[j].id.split('l')[1] == i)
          exists = true;
      }
      if (!exists) {
        id = i;
        break;
      }
    }
    id = 'l' + id;
    this.state.user.lists.push({ id: id, name: this.state.listName, tasks: [] });
    this.renderInvoke();
  }

  handleRemoveList(id) {
    for (var i = 0; i < this.state.user.lists.length; ++i) {
      if (this.state.user.lists[i].id == id) {
        this.state.user.lists.splice(i, 1);
        break;
      }
    }
    this.renderInvoke();
  }

  render() {
    this.saveUser();
    var lists = [];
    for (var i = 0; i < this.state.user.lists.length; ++i) {
      lists.push(<List id={this.state.user.lists[i].id} name={this.state.user.lists[i].name} getUser={this.getUser} removeListHandler={this.handleRemoveList} renderInvokeHandler={this.renderInvoke}/>);
    }
    return (
      <div>
        <button className="button" id="logout">Logout</button>
        <div className="container">
          <div className="menuContainer">
            <input className="textInput" type="text" id="newListName" placeholder="New List" onChange={e => this.setState({ listName: e.target.value })}></input>
            <button className="button addButton" id="listButton" onClick={this.handleNewList}>Add New List</button>
          </div>
        </div>
        <div id="lists"> {lists} </div></div>
    );
  }
}

export default ToDo;
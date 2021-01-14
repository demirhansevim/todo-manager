import React from 'react';
import ListElement from './ListElement';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            taskName: "",
            switch: true
        };
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleRemoveList = this.handleRemoveList.bind(this);
    }

    handleNewTask() {
        var user = this.props.getUser();
        var id = -1;
        for (var k = 0; k < user.lists.length; ++k) {
            if (user.lists[k].id == this.state.id) {
                for (var i = 0; i <= user.lists[k].tasks.length; ++i) {
                    var exists = false;
                    for (var j = 0; !exists && j < user.lists[k].tasks.length; ++j)
                        if (user.lists[k].tasks[j].id.split('e')[1] == i)
                            exists = true;
                    if (!exists) {
                        id = i;
                        break;
                    }
                }
                break;
            }
        }
        id = 'e' + id;
        for (var i = 0; i < user.lists.length; ++i) {
            if (user.lists[i].id == this.state.id) {
                user.lists[i].tasks.push({ id: id, name: this.state.taskName, checked: false });
            }
        }
        this.props.renderInvokeHandler();
    }

    handleRemoveTask(id) {
        var user = this.props.getUser();
        for (var i = 0; i < user.lists.length; ++i) {
            if (user.lists[i].id == this.state.id) {
                for (var j = 0; j < user.lists[i].tasks.length; ++j) {
                    if (user.lists[i].tasks[j].id == id) {
                        user.lists[i].tasks.splice(j, 1);
                        break;
                    }
                }
                break;
            }
        }
        this.props.renderInvokeHandler();
    }

    handleRemoveList() {
        this.props.removeListHandler(this.state.id);
    }

    render() {
        var elements = [];
        var user = this.props.getUser();
        for (var i = 0; i < user.lists.length; ++i) {
            if (user.lists[i].id == this.state.id) {
                for (var j = 0; j < user.lists[i].tasks.length; ++j) {
                    elements.push(<ListElement id={user.lists[i].tasks[j].id} name={user.lists[i].tasks[j].name} checked={user.lists[i].tasks[j].checked} removeTaskHandler={this.handleRemoveTask} renderInvokeHandler={this.renderInvoke} />);
                }
                break;
            }
        }
        return (
            <div className="list" id={this.state.id}>
                <div className="listInside">
                    <button className="button removeButton" onClick={this.handleRemoveList}>Remove List</button>
                    <h1 className="listName">{this.state.name}</h1>
                    <input className="textInput inputMobile" type="text" id="newTaskName-${this.id}" placeholder="New Task" onChange={e => this.setState({ taskName: e.target.value })}></input>
                    <button className="button addButton" onClick={this.handleNewTask}>Add New Task</button>
                </div><ul> {elements} </ul></div>
        );
    }
}

export default List;
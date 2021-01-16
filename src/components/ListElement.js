import React from 'react';

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            checked: props.checked
        };
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    /**
     * Updates the checkbox of this ListElement, updates local storage
     * and invokes render.
     * @param {boolean} checked 
     */
    handleCheckBox(checked) {
        this.state.checked = checked;
        var user = this.props.getUser();
        for (var i = 0; i < user.lists.length; ++i) {
            if (user.lists[i].id == this.props.parentId) {
                for (var j = 0; j < user.lists[i].tasks.length; ++j) {
                    if (user.lists[i].tasks[j].id == this.state.id) {
                        user.lists[i].tasks[j].checked = checked;
                        break;
                    }
                }
                break;
            }
        }
        this.props.renderInvokeCheck();
    }

    /**
     * Removes this task from the list.
     */
    handleRemoveTask() {
        this.props.removeTaskHandler(this.state.id);
    }

    render() {
        this.state.id = this.props.id;
        this.state.name = this.props.name;
        this.state.checked = this.props.checked;
        if (this.state.checked) {
            return (<li className="listElement" id={this.state.id}>
                <input className="listCheckbox" type="checkbox" checked onChange={() => this.handleCheckBox(false)}></input>
                <label className="listLabel">{this.state.name}</label>
                <button className="button removeButton removeTaskButton" onClick={this.handleRemoveTask}>X</button></li>);
        } else {
            return (<li className="listElement" id={this.state.id}>
                <input className="listCheckbox" type="checkbox" onChange={() => this.handleCheckBox(true)}></input>
                <label className="listLabel">{this.state.name}</label>
                <button className="button removeButton removeTaskButton" onClick={this.handleRemoveTask}>X</button></li>);
        }
    }
}

export default ListElement;
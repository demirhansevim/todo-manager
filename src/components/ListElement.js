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

    handleCheckBox(checked) {
        this.state.checked = checked;
        this.props.renderInvokeHandler();
    }

    handleRemoveTask() {
        this.props.removeTaskHandler(this.state.id);
    }

    render() {
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
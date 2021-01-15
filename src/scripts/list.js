import ReactDOM from 'react-dom';
import { removeList,addNewTask,addTaskEnter } from "./utils.js"

class List {
    /**
     * Creates a new instance of List.
     * @param {string} id 
     * @param {string} name 
     */
    constructor(id, name) {
        this.id = "l" + id;
        this.name = name;
        this.tasks = [];
    }

    /**
     * Appends the list on the page.
     */
    appendDOM() {
        var html = `
        <div class="list" id="${this.id}">
            <div class="listInside">
                <button class="button removeButton" onClick={removeList('${this.id}')}>Remove List</button>
                <h1 class="listName">${this.name}</h1>
                <input class="textInput inputMobile" type="text" id="newTaskName-${this.id}" placeholder="New Task" onKeyDown={addTaskEnter('${this.id}')}></input>
                <button class="button addButton" id="taskButton-${this.id}" onClick={this.clickHandler.bind(this,'${this.id}')}>Add New Task</button>
        </div>
        <ul>`;
        document.getElementById("lists").innerHTML += html;
        this.tasks.forEach(task => task.appendDOM());
    }

    /**
     * Removes the list from the page.
     */
    remove() {
        document.getElementById(this.id).remove();
    }

    /**
     * Finds an empty index for list element.
     */
    findId() {
        for (var i = 0; i <= this.tasks.length; ++i) {
            var exists = false;
            for (var j = 0; !exists && j < this.tasks.length; ++j)
                if (this.tasks[j].id.split("e")[1] == i)
                    exists = true;
            if (!exists)
                return i;
        }
        return -1;
    }

    /**
     * Removes list element from the list and the page.
     * @param {number} id 
     */
    removeTask(id) {
        for (var i = 0; i < this.tasks.length; ++i)
            if (this.tasks[i].id == id) {
                this.tasks.splice(i, 1)[0].remove();
                break;
            }
    }

    /**
     * Returns the list element with the given id.
     * @param {number} id 
     */
    getTask(id) {
        for (var i = 0; i < this.tasks.length; ++i)
            if (this.tasks[i].id == id)
                return this.tasks[i];
        return null;
    }
}

export default List;
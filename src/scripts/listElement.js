class ListElement {
    /**
     * Creates a new instance of ListElement.
     * @param {List} list 
     * @param {string} id 
     * @param {string} name 
     */
    constructor(id, name) {
        this.name = name;
        this.checked = false;
    }

    /**
     * Appends the object to the DOM.
     */
    appendDOM() {
        var html = `
                <li class="listElement" id="${this.id}">
                    <input class="listCheckbox" type="checkbox" onChange="checkTask('${this.id}')" ${this.checked ? "checked" : ""}>
                    <label class="listLabel"> ${this.name}</label>
                    <button class="button removeButton removeTaskButton" onClick="removeTask('${this.id}')">X</button>
                </li>`;
        document.getElementById(this.id.split("e")[0]).innerHTML += html;
    }

    /**
     * Removes the object from the DOM.
     */
    remove() {
        document.getElementById(this.id).remove();
    }

    /**
     * Updates check attribute according to the checkbox of the object.
     */
    check() {
        this.checked = document.getElementById(this.id).firstChild.nextSibling.checked;
    }
}

export default ListElement;
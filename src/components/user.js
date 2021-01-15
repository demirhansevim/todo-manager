class User {
    /**
     * Creates a new instance of user.
     * @param {string} username 
     * @param {string} password 
     * @param {string} name 
     * @param {Date} birthDate 
     * @param {string} gender 
     */
    constructor(username, password, name, birthDate, gender) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;
        this.lists = [];
    }
}

export default User;







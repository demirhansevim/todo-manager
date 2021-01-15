import User from "./user.js"
import Session from "./session.js"
import List from "./list.js"
import ListElement from "./listElement.js"

/**
 * Creates a new session if none exists in the session storage.
 */
export function initSession() {
    if (sessionStorage.getItem("session") == null) {
        var session = new Session();
        sessionStorage.setItem("session", JSON.stringify(session));
    }
}

/**
* Creates a new user with the given username and password. Returns true
* if the process was successful. Otherwise, returns false.
* @param {string} username 
* @param {string} password 
* @param {string} name 
* @param {Date} birthDate 
* @param {boolean} gender 
*/
export function register(username, password, email, birthDate, gender) {
    if (localStorage.getItem(username) != null)
        return false;
    var user = new User(username, password, email, birthDate, gender);
    updateUser(user);
    return true;
}

/**
 * Logs a user in the session. If there is no user with the given username,
 * returns null; if the given password is incorrect, returns false; else returns
 * true.
 * @param {string} username 
 * @param {string} password 
 */
export function login(username, password) {
    var user = localStorage.getItem(username);
    if (user == null)
        return null;
    user = JSON.parse(user);
    if (user.password != password)
        return false;
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = username;
    updateSession(session);
    return true;
}

/**
 * Logs a user out of the session.
 */
export function logout() {
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = null;
    updateSession(session);
}

/**
 * Updates session information in the session stroage.
 * @param {Session} session 
 */
export function updateSession(session) {
    sessionStorage.setItem("session", JSON.stringify(session));
}

/**
 * Updates user information in the local storage.
 * @param {User} user 
 */
export function updateUser(user) {
    localStorage.setItem(user.username, JSON.stringify(user));
}

/**
 * Loads all lists of the user.
 */
export function init() {
    var username = JSON.parse(sessionStorage.getItem("session")).user;
    return JSON.parse(localStorage.getItem(username));
}

var USER = null;
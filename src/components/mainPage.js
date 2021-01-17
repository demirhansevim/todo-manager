import React from "react";
import { withRouter } from "react-router-dom";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row indexButtonContainer justify-content-center">
                    <div className="col-md-6 text-center">
                        <a type="button" className="indexButton" value="Login" onClick={() => this.props.history.push("login")}><span>Login</span></a>&nbsp;
                        <a type="button" className="indexButton" value="Register" onClick={() => this.props.history.push("register")}><span>Register</span></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainPage);
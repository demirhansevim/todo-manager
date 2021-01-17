import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Row className="indexButtonContainer justify-content-center">
                    <Col md="6" className="text-center">
                        <a type="button" className="indexButton" value="Login" onClick={() => this.props.history.push("login")}><span>Login</span></a>&nbsp;
                        <a type="button" className="indexButton" value="Register" onClick={() => this.props.history.push("register")}><span>Register</span></a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(MainPage);
import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

handleClick(item) {
    this.props.handler(item)
}
  render() {
    return (
        <div className="row indexButtonContainer justify-content-center">
            <div className="col-md-6 text-center">
                <a type="button" className="indexButton" value="Login" onClick={this.handleClick.bind(this,2)}><span>Login</span></a>&nbsp;
                <a type="button" className="indexButton" value="Register" onClick={this.handleClick.bind(this,1)}><span>Register</span></a>
            </div>
        </div>

    );
  }
 

}

export default MainPage;
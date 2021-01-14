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
        <div className="indexButtonContainer">
        <input type="button" className="indexButton" value="Login" onClick={this.handleClick.bind(this,2)}/>
        <input type="button" className="indexButton" value="Register" onClick={this.handleClick.bind(this,1)}/>
        </div>
    );
  }
 

}

export default MainPage;
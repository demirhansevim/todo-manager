import React from 'react';
import logo from "../assets/logo.png";
import logoText from "../assets/logo-text.png";

class Header extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <header>
               <div className="logoContainer">
                  <a className="logoClick" onClick={() => this.props.handler(0)}>
                     <img className="logo" src={logo} />
                     <img className="logoText" src={logoText} />
                  </a>
               </div>
            </header>
         </div>);
   }

}

export default Header;


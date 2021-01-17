import React from "react";

class Footer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isFixed: props.isFixed
      };
   }

   render() {
      this.state.isFixed = this.props.isFixed;
      if (this.state.isFixed) {
         return (
            <div className="footer footer-fixed">
               <div className="footerLeft">
                  <h2>TODO</h2>
                  <p>This to-do list project was prepared for the Web Application Development course in 2021.</p>
               </div>
               <div className="footerRight">
                  Prepared by OZU students.
               </div>
            </div>
         );
      } else {
         return (
            <div className="footer">
               <div className="footerLeft">
                  <h2>TODO</h2>
                  <p>This to-do list project was prepared for the Web Application Development course in 2021.</p>
               </div>
               <div className="footerRight">
                  Prepared by OZU students.
               </div>
            </div>
         );
      }
   }
}

export default Footer;


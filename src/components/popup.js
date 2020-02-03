import React, { Component } from "react";
import "./popup.css";

export default class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>Thank You for shopping at PrettyLittleThing</h1>
          <button className="popup-close-btn" onClick={this.props.closePopup}>
            Go Back & Shop More
          </button>
        </div>
      </div>
    );
  }
}

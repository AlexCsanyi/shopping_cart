import React, { Component } from "react";
import "./basket.css";
import currency from "../utils/currency";
import Popup from "./popup.js";

export default class Basket extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { cartItems } = this.props;
    const prices = cartItems.map(item => item.count * item.price);
    const reducer = (accumulator, item) => {
      return accumulator + item;
    };
    const total = prices.reduce(reducer, 0);
    return (
      <div className="cart-container">
        <div className="total-container">
          <span>TOTAL: {currency.formatCurrency(total)}</span>
          <p>
            {cartItems.length === 0 ? (
              "Basket is empty"
            ) : (
              <span>
                You have {cartItems.length}{" "}
                {cartItems.length === 1
                  ? "type of product"
                  : "different types of products"}{" "}
                in your basket
              </span>
            )}
          </p>
          {total > 0 ? (
            <button
              onClick={this.togglePopup.bind(this)}
              className="button-checkout"
            >
              Check Out
            </button>
          ) : (
            ""
          )}
          {this.state.showPopup ? (
            <Popup
              text="Close Me"
              closePopup={this.togglePopup.bind(this)}
            ></Popup>
          ) : null}
        </div>
      </div>
    );
  }
}

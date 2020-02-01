import React, { Component } from "react";
import "./basket.css";
import currency from "../utils/currency";

export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    const prices = cartItems.map(item => item.count * item.price);
    const reducer = (accumulator, item) => {
      return accumulator + item;
    };
    const total = prices.reduce(reducer, 0);
    console.log(prices);
    return (
      <div className="cart-container">
        <div className="total-container">
          <span>TOTAL: {currency.formatCurrency(total)}</span>
          <p>
            {cartItems.length === 0 ? (
              "Basket is empty"
            ) : (
              <span>You have {cartItems.length} products in your basket</span>
            )}
          </p>
          {total > 0 ? (
            <button className="button-checkout">Check Out</button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

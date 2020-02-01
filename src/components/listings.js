import React, { Component } from "react";
import "./listings.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import currency from "../utils/currency";

export default class Listings extends Component {
  render() {
    const { cartItems } = this.props;
    const counts = cartItems.map(count => count.count);
    const ids = cartItems.map(id => id.id);
    const listItems = this.props.items.map(item => (
      <li className="product-listing--item" key={item.id}>
        <div className="product-listing--item-detail-container">
          <img
            className="product-listing--item-img"
            src={item.img}
            alt={item.name}
          ></img>
          <div className="product-listing--item-description-container">
            <h3 className="product-listing--item-title">{item.name}</h3>
            <p className="product-listing--item-price">
              {currency.formatCurrency(item.price)}
            </p>
          </div>
        </div>
        <div className="product-listing--qty-ctrl-container">
          <div className="product-listing--qty-ctrl">
            <FaMinusCircle
              onClick={e => this.props.handleRemoveFromCart(e, item)}
              className="product-listing--qty-icon"
            ></FaMinusCircle>
            <div className="product-listing--qty">
              <h3 className="product-listing--qty-ctrl-qty">
                {ids.indexOf(item.id) > -1 ? counts[ids.indexOf(item.id)] : "0"}
              </h3>
              <p
                onClick={e => this.props.handleDeleteFromCart(e, item)}
                className="product-listing--qty-ctrl-remove"
              >
                REMOVE
              </p>
            </div>
            <FaPlusCircle
              onClick={e => this.props.handleAddToCart(e, item)}
              className="product-listing--qty-icon"
            ></FaPlusCircle>
          </div>
        </div>
      </li>
    ));

    return (
      <div className="main-container">
        <ul className="product-listing">{listItems}</ul>
      </div>
    );
  }
}

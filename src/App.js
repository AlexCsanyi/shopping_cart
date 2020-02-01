import React, { Component } from "react";
import Listings from "./components/listings";
import Filter from "./components/filter";
import Basket from "./components/basket";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: [],
      cartItems: [],
      isLoaded: false
    };
    this.handleChangeColour = this.handleChangeColour.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          filteredItems: json
        });
      });
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }

  handleChangeColour(e) {
    this.setState({ colour: e.target.value });
    this.listItems();
  }

  listItems() {
    this.setState(state => {
      if (state.colour !== "") {
        return {
          filteredItems: state.items.filter(a => a.colour === state.colour)
        };
      } else {
        return { filteredItems: state.items };
      }
    });
  }

  handleAddToCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(product => {
        if (product.id === item.id) {
          productAlreadyInCart = true;
          product.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...item, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems;
      cartItems.forEach(product => {
        if (product.id === item.id) {
          if (product.count > 0) {
            product.count--;
            if (product.count === 0) {
              cartItems.splice(cartItems.indexOf(product), 1);
            }
          }
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }

  handleDeleteFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems;
      cartItems.forEach(product => {
        if (product.id === item.id) {
          cartItems.splice(cartItems.indexOf(product), 1);
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }

  render() {
    var { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div className="loading">
          <h1>PrettyLittleThings</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Filter
            items={this.state.items}
            colour={this.state.colour}
            handleChangeColour={this.handleChangeColour}
          ></Filter>
          <Listings
            items={this.state.filteredItems}
            handleAddToCart={this.handleAddToCart}
            handleRemoveFromCart={this.handleRemoveFromCart}
            handleDeleteFromCart={this.handleDeleteFromCart}
            cartItems={this.state.cartItems}
          ></Listings>
          <Basket cartItems={this.state.cartItems}></Basket>
        </div>
      );
    }
  }
}

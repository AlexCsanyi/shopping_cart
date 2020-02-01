import React, { Component } from "react";
import "./filter.css";

export default class Filter extends Component {
  render() {
    const colours = [...new Set(this.props.items.map(item => item.colour))];
    const options = colours.map(colour => (
      <option key={colour} value={colour}>
        {colour}
      </option>
    ));

    return (
      <div className="filter-container">
        <label>
          Filter by colour{" "}
          <select
            className="color-form-control"
            defaultValue={this.props.colour}
            onChange={this.props.handleChangeColour}
          >
            <option value="">ALL</option>
            {options}
          </select>
        </label>
      </div>
    );
  }
}

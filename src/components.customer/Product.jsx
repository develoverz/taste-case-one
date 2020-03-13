import React, { Component } from "react";

class Product extends Component {
  state = {
    isAdding: false,
    quantity: 0
  };
  render() {
    const { productdata } = this.props;
    // console.log("hello2", productdata);

    return (
      <div
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 300
        }}
      >
        <h3>{productdata.product_name}</h3>
        <input
          type="button"
          value="add"
          style={{ display: this.state.isAdding ? "none" : "block" }}
          onClick={() => {
            this.setState({ isAdding: true });
          }}
        />
        <div
          className="add_section"
          style={{ display: this.state.isAdding ? "block" : "none" }}
        >
          <div style={{ display: "flex" }}>
            <h3 onClick={() => console.log("minus is clicked")}>-</h3>
            <h3>{this.state.quantity}</h3>
            <h3 onClick={() => console.log("plus is clicked")}>+</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

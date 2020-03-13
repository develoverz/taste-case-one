import React, { Component } from "react";
import firebase from "./firebase";
import ProductList from "./components.customer/ProductList";
class Customer extends Component {
  state = {
    products: []
  };
  constructor() {
    super();
    const productRef = firebase.database().ref("products");
    productRef.on("child_added", snap => {
      const tempProduct = { ...snap.val(), id: snap.key };
      this.setState({
        products: [...this.state.products, tempProduct]
      });
    });
  }
  render() {
    return (
      <div>
        hello from customer
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Customer;

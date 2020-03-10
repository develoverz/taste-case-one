import React, { Component } from "react";
import firebase from "../firebase";
import ProductDetails from "./ProductDetails";
class Products extends Component {
  state = {
    products: [],
    showDetails: false,
    detailProduct: ""
  };
  componentWillReceiveProps(props) {
    console.log("id", props.currentId);
    const productRef = firebase.database().ref("products");
    productRef
      .orderByChild("vendor_id")
      .equalTo(props.currentId)
      .on("child_added", snap => {
        const product = { ...snap.val(), id: snap.key };
        console.log("hello", product);
        this.setState({ products: [...this.state.products, product] });
      });
  }
  handleCross = () => {
    this.setState({ showDetails: false });
  };
  render() {
    return (
      <div>
        this is main page in which products list willbe shown to vendor
        <div>cards to show each product</div>
        {this.state.products.map(product => {
          return (
            <div
              key={product.id}
              style={{
                backgroundColor: "grey",
                display: this.state.showDetails ? "none" : "block"
              }}
            >
              <h4>{product.product_name}</h4>
              <h6>{product.product_cat}</h6>
              <h6>{product.product_price}</h6>
              <input
                type="button"
                value="show more"
                onClick={() => {
                  console.log("card is cliked", product.id);
                  this.setState({
                    detailProduct: product,
                    showDetails: true
                  });
                }}
              />
            </div>
          );
        })}
        <div
          className="productDetails"
          style={{ display: this.state.showDetails ? "block" : "none" }}
        >
          <ProductDetails
            detailProduct={this.state.detailProduct}
            handleCross={this.handleCross}
          />
        </div>
      </div>
    );
  }
}

export default Products;

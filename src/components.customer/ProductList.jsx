import React, { Component } from "react";
import Product from "./Product";
class ProductList extends Component {
  render() {
    const { products } = this.props;
    // console.log("hello1", products);

    return (
      <div style={{ display: "flex" }}>
        {products.map(product => {
          return <Product key={products.id} productdata={product} />;
        })}
      </div>
    );
  }
}

export default ProductList;

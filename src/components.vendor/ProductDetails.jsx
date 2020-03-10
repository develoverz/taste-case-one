import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    const { detailProduct, handleCross } = this.props;
    return (
      <div
        style={{
          height: 100,
          width: 200,
          backgroundColor: "tomato",
          alignSelf: "center"
        }}
      >
        hello i am {detailProduct.product_name} . i belongs to
        {detailProduct.product_cat}. i cost {detailProduct.product_price}
        ruppes. thankyou...!!
        <input
          type="button"
          value="x"
          onClick={() => {
            console.log("cross clicked");
            handleCross();
          }}
        />
      </div>
    );
  }
}

export default ProductDetails;

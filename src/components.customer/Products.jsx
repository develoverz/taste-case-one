import React from "react";

const Products = ({ products }) => {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      {products.map(product => {
        return (
          <div
            style={{
              backgroundColor: "tomato",
              height: 100,
              width: 300
            }}
          >
            <h3>{product.product_name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

import React from "react";

export default function Product(props) {
  const product = props.product;
  return (
    <div className="card border-0 shadow">
      <div className="card-body">
        <img
          src={product.thumbnail}
          className="card-img-top product-img"
          alt={product.title}
        />
        <h5 className="card-title mt-3">{product.title}</h5>
      </div>
    </div>
  );
}

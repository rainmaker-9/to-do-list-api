import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-3">
      <div className="row g-3">
        <div className="col-12 text-center">
          <h1>Product List Management using React-Redux</h1>
        </div>
        <div className="col-12 text-center">
          <Link to="/products" className="btn btn-success">
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}

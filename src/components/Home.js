import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Product List Management using React-Redux</h1>
      <Link to="/products">Products</Link>
    </div>
  );
}

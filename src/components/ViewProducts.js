import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store/actions";
import Product from "./Product";
import { Link } from "react-router-dom";

export default function ViewProducts() {
  const products_endpoint = `${process.env.REACT_APP_API_HOST_BASE_URL}/products`;
  const products = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch(products_endpoint);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    fetchProducts().then((result) => {
      if (products.length === 0) {
        dispatch(actionCreators.addAllToList(result.products));
      }
    });
  }, []);

  return (
    <div className="container py-3">
      {products.length === 0 && <h1 className="text-center">Loading...</h1>}
      {products.length > 0 && (
        <div className="row g-3">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="text-center">Products</h1>
            <Link to="/products/add" className="btn btn-success">
              Add Product
            </Link>
          </div>
          {products.length > 0 && (
            <div className="col-12">
              <div className="row g-4">
                {products.map((product) => {
                  return (
                    <div className="col-md-4" key={product.id}>
                      <Product product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

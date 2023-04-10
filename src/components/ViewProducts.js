import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function ViewProducts() {
  const products_endpoint = `${process.env.REACT_APP_API_HOST_BASE_URL}/products`;
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch(products_endpoint);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    fetchProducts().then((result) => {
      setProducts(result.products);
      dispatch(actionCreators.addAllToList(result.products));
    });
  }, []);
  return (
    <div>
      {products.length === 0 && <h3>Loading...</h3>}
      {products.length > 0 && (
        <div>
          <h1>Products</h1>
          <ul>
            {products.map((product) => {
              return <li key={product.id}>{product.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

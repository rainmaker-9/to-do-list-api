import React, { useCallback, useEffect, useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData(e.target);
    let currentId = products[products.length - 1].id;
    let prod = {
      id: ++currentId,
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price"),
      thumbnail: fd.get("thumbnail"),
    };
    dispatch(actionCreators.addToList(prod));
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              required
            />
            <textarea
              name="description"
              placeholder="Product Description"
              rows="5"
              required
            ></textarea>
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              required
            />
            <input
              type="url"
              name="thumbnail"
              placeholder="Product Thumbnail"
              required
            />
            <button>Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

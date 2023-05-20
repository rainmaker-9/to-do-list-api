import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData(e.target);
    let prod = {
      id: "",
      title: fd.get("title"),
      description: fd.get("description"),
      price: fd.get("price"),
      thumbnail: fd.get("thumbnail"),
    };
    dispatch(actionCreators.addToList(prod));
    navigate("/products");
  };

  return (
    <div className="container py-3">
      <div className="row g-3 justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-header">
              <h4 className="card-title my-1">Add a Product</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Product Title"
                        required
                      />
                      <label htmlFor="title">Product Title</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        name="description"
                        id="description"
                        placeholder="Product Description"
                        style={{ height: "120px" }}
                        required
                      ></textarea>
                      <label htmlFor="description">Product Description</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Product Price"
                        required
                      />
                      <label htmlFor="price">Product Price</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="url"
                        name="thumbnail"
                        id="thumbnail"
                        placeholder="Product Thumbnail"
                        required
                      />
                      <label htmlFor="thumbnail">Product Thumbnail</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success btn-lg">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

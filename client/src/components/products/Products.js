import axios from "axios";
import React, { useEffect, useState } from "react";
import "./edit.css";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const deleteProduct = (input) => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/api/products", {
        id: input,
      })
      .then((response) => {});
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/api/products")
      .then((response) => {
        setAllProducts(response.data);
      });
  }, []);

  return (
    <div className="products">
      {allProducts.map((pro) => {
        return (
          <div
            className="row"
            key={pro.id}
            style={{ marginTop: "30px", border: "solid 1px" }}
          >
            <div className="col-md-2">رقم المنتج</div>
            <div className="col-md-2">اسم المنتج</div>
            <div className="col-md-2">سعر المنتج</div>
            <div className="col-md-2">كود المنتح</div>
            <div className="col-md-4"></div>
            <div className="col-md-2">{pro.id}</div>
            <div className="col-md-2">{pro.name}</div>
            <div className="col-md-2">{pro.price}</div>
            <div className="col-md-2">{pro.category}</div>
            <div className="col-md-2">
              <button
                className="btn-danger"
                onClick={(e) => {
                  deleteProduct(pro.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

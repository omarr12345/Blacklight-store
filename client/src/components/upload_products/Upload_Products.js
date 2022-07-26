import React, { useEffect } from "react";
import "./edit.css";
import axios from "axios";
import FormData from "form-data";

function Uploadproducts() {
  useEffect(() => {
    const form = document.getElementById("add-p-f");
    form.addEventListener("submit", (e) => {
      const formData = new FormData(form);
      e.preventDefault();

      axios
        .post(
          process.env.REACT_APP_API_BASE_URL + "/api/admin/addproduct",
          formData
        )
        .then((response) => {
          console.log(response);
        });
    });
  }, []);

  return (
    <div className="AdminAddProduct">
      <form
        className="add-product-form"
        id="add-p-f"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="productname"
          placeholder="Product name"
          className="form-text-input  form-control"
          required
        />
        <br />
        <input
          type="text"
          name="productprice"
          placeholder="Product price"
          className="form-text-input form-control"
          required
        />
        <br />

        <input
          type="text"
          name="productcategory"
          placeholder="Product Code"
          className="form-text-input form-control"
          required
        />
        <br />
        <input
          type="text"
          name="productdetails"
          placeholder="Product details"
          className="form-text-input form-control"
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="first-img"
          name="uploaded_image_1"
          accept=""
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          name="uploaded_image_2"
          accept=""
          required
        />
        <br />

        <input
          type="file"
          className="form-control"
          id="third-img"
          name="uploaded_image_3"
          accept=""
          required
        />
        <br />

        <input
          type="file"
          className="form-control"
          id="sec-img"
          name="uploaded_image_4"
          accept=""
          required
        />

        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          name="uploaded_image_5"
          accept=""
          required
        />
        <button
          className="btn btn-success adding-product-sub-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uploadproducts;

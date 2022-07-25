import React, { useEffect } from "react";
import "./edit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card(props) {
  const { item: product } = props;

  useEffect(() => {
    var secImgList = document.querySelectorAll(".second-card-img-top");
    secImgList.forEach((img) => {
      img.addEventListener("mouseover", () => {
        setTimeout(() => {
          img.style.opacity = "1";
        }, 300);
      });

      img.addEventListener("mouseleave", () => {
        setTimeout(() => {
          img.style.opacity = "0";
        }, 300);
      });
    });
  }, []);

  return (
    <div className="my-2 col-6 col-md-4 col-lg-3 px-1 ">
      <div className="card d-flex flex-column  card-contains" key={product.id}>
        <div className="card-img">
          <img
            src={"../../Assets/" + product.first_img}
            className="card-img-top "
            alt="img"
          />
          <img
            src={"../../Assets/" + product.sec_img}
            className="second-card-img-top "
            alt="img"
          />
        </div>

        <br />
        <div className="card-con">
          <div className="card-name ">
            <p>{product.name}</p>
          </div>

          <br />

          <div className="  w-100 d-flex flex-row  flex-wrap justify-content-between ">
            <p className="card-price">السعر:{product.price}جنيه</p>
          </div>
        </div>

        <div className="card-details-button row ">
          <div className="py-3 add-to-cart-btn col-12 ">
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="padding-top"
              ></FontAwesomeIcon>{" "}
              شراء الاّن{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./edit.css";
import Completingorders from "../completingorders/Completingorders";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillNegativeCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Buyingform() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(input) {
    // console.log(input);
    if (input < 0) {
      return 0;
    } else {
      setQuantity(Number(input));

      setProduct({
        ...product,
        quantity: Number(input),
      });
    }
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/api/product/" + id)
      .then((response) => {
        setProduct(response.data);
      });
  }, []);
  return (
    <div className="buying-form">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="swiper">
              <Swiper
                // spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                // className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      "/static/" +
                      product.first_img +
                      " "
                    }
                    alt="first_img"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      "/static/" +
                      product.sec_img +
                      " "
                    }
                    alt="first_img"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      "/static/" +
                      product.third_img +
                      " "
                    }
                    alt="first_img"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      "/static/" +
                      product.forth_img +
                      " "
                    }
                    alt="first_img"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      "/static/" +
                      product.fifth_img +
                      " "
                    }
                    alt="first_img"
                    className="img-fluid"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="col-md-7">
            <div style={{ height: "100%" }}>
              <div className="card-body">
                <h4> إسم المنتج: {product.name}</h4> <br />
                <p className="card-text font-bold"> السعر: {product.price}</p>
                <span className="number-wrapper">
                  <input
                    id="quantity"
                    type="text"
                    value={quantity}
                    className="col-12 text-center w-25"
                    onChange={(e) => {
                      handleQuantity(e);
                    }}
                  />
                  <span
                    onClick={(e) => {
                      document.getElementById("quantity").value++;
                      handleQuantity(document.getElementById("quantity").value);
                    }}
                  >
                    <BsFillPlusCircleFill
                      style={{ color: "darkgray", fontSize: "25px" }}
                    />
                  </span>

                  <span
                    onClick={(e) => {
                      if (document.getElementById("quantity").value == 1) {
                        return document.getElementById("quantity").value == 1;
                      } else {
                        document.getElementById("quantity").value--;
                        handleQuantity(
                          document.getElementById("quantity").value
                        );
                      }
                    }}
                  >
                    <AiFillMinusCircle
                      style={{ color: "darkgray", fontSize: "28px" }}
                    />
                  </span>
                </span>
                <br />
                <p>السعر الاجمالي:{product.price * quantity} </p>
                <div className="prod-details">
                  {" "}
                  <p> التفاصيل: </p>
                  <p>{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Completingorders item={product} quantity={quantity} />
    </div>
  );
}

export default Buyingform;

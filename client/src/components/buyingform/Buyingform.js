/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./edit.css";
import Completingorders from "../completingorders/Completingorders";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

  function handleQuantity(e) {
    console.log(e.target.value);
    if (e.target.value < 0) {
      return 0;
    } else {
      setQuantity(Number(e.target.value));

      setProduct({
        ...product,
        quantity: Number(e.target.value),
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
      <div className="container ">
        <div className="row max-height">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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
          <div className="card-body col-5 col-md-6 col-lg-6 col-sm-6 ">
            <h5 className=""> {product.name}</h5> <br />
            <h5 className="card-text font-bold"> السعر: {product.price}</h5>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              max="10"
              className="col-12 text-center w-50 p-2"
              onChange={(e) => {
                handleQuantity(e);
              }}
            />
            <br />
            <h5>السعر الاجمالي:{product.price * quantity} </h5>{" "}
            <h5 className="text-center"> التفاصيل{product.details} </h5>
          </div>
        </div>
      </div>
      <Completingorders item={product} quantity={quantity} />
    </div>
  );
}

export default Buyingform;

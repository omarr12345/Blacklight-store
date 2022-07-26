/* eslint-disable no-self-assign */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./edit.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/api/orders")
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  function test(input) {
    axios
      .post(process.env.API_BASE_URL + "/api/orders/delete", {
        id: input,
      })
      .then((response) => {
        response.json("done");
        window.location.reload();
      });
  }

  return (
    <div className="orders">
      <div className="row">
        <div
          className="col-md-1"
          style={{ fontWeight: "bold", borderLeft: "solid 1px" }}
        >
          رقم الأوردر
        </div>
        <div className="col-md-1">اسم العميل</div>
        <div className="col-md-1">رقم العميل</div>
        <div className="col-md-1">الرقم البديل</div>
        <div className="col-md-2">عنوان العميل</div>
        <div className="col-md-1">كود المنتج</div>
        <div className="col-md-1">اسم المنتج</div>
        <div className="col-md-1">الكميه</div>
        <div className="col-md-2">الملاحظات</div>
      </div>
      {orders.map((o) => {
        return (
          <div className="row" key={o.id} style={{ marginTop: "50px" }}>
            <div
              className="col-md-1"
              style={{ fontWeight: "bold", borderLeft: "solid 1px" }}
            >
              bt-{o.id}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              {o.customer_name}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              {o.customer_num}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              {o.customer_sec_num}
            </div>
            <div className="col-md-2" style={{ wordWrap: "break-word" }}>
              {o.customer_address}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              {o.product_code}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              {o.product_name}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              {o.product_quantity}
            </div>
            <div className="col-md-2" style={{ wordWrap: "break-word" }}>
              {o.customer_notes}
            </div>
            <div className="col-md-1" style={{ wordWrap: "break-word" }}>
              <button
                className="btn-danger"
                onClick={() => {
                  test(o.id);
                  // window.location = window.location;
                }}
              >
                delete
              </button>
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Orders;

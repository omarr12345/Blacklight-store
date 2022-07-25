/* eslint-disable no-self-assign */
import React from "react";
import "./edit.css";
import { useState } from "react";
import axios from "axios";

function Completingorders(props) {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [secNum, setSecNum] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const NumericOnly = (e) => {
    //angka only
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/orders",
        {
          CustomerName: name,
          CustomerAddress: address,
          CustomerNumber: num,
          CustomerSecNum: secNum,
          Notes: notes,
          ProductQuantity: props.quantity,
          ProductCode: props.item.category,
          ProductName: props.item.name,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response) => {
        alert("تم ارسال طلبك");
      });
  };

  return (
    <div className="completing-orders container ">
      <h3 className="text-center outline">ادخل بيانات الشحن من فضلك</h3>
      <br />
      <form onSubmit={handleSubmit} className="form-style">
        <p htmlFor="username">اسم المشتري</p>
        <input
          type="text"
          name="username"
          className="form-control w-100"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br />
        <p htmlFor="usermobile">رقم الموبايل : 11 رقم باللغه الانجليزيه</p>
        <input
          type="text"
          name="usermobile"
          id="usermobile"
          className="form-control w-100"
          maxLength="11"
          onChange={(e) => {
            NumericOnly(e);
            setNum(e.target.value);
          }}
          required
        />
        <br />
        <p htmlFor="usermobile-2">(البديل)رقم الموبايل</p>
        <input
          type="text"
          name="usermobile2"
          id="usermobile2"
          maxLength="11"
          className="form-control w-100"
          onChange={(e) => {
            NumericOnly(e);
            setSecNum(e.target.value);
          }}
          required
        />
        <br />

        <p htmlFor="useraddress">العنوان بالتفصيل</p>
        <input
          type="text"
          name="address"
          id="useraddress"
          className="form-control w-100"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />

        <br />

        <p htmlFor="notes">الملاحظات(كالمقاس و الألوان و غيره)</p>
        <textarea
          type="text"
          name="notes"
          id="usernotes"
          className="form-control w-100"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />

        <br />

        <div className="text-center">
          <button className="btn btn-success text-align-center" type="submit">
            ارسال الطلب
          </button>
        </div>
      </form>
    </div>
  );
}

export default Completingorders;

import React from "react";
import "./edit.css";
import { useState } from "react";
import axios from "axios";
import "./edit.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    //console.log(localStorage.getItem("access_token"));
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "/api/adminlogin",
        {
          Username: username,
          Password: password,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.Email === "not found on database") {
          alert("please write valid username and password");
        } else {
          console.log(response);
          localStorage.setItem("admin_access_token", response.data.accessToken);
          sessionStorage.setItem("Admin", "true");
          axios
            .post(
              process.env.REACT_APP_API_BASE_URL + `/api/adminauthentication`,
              {
                token: localStorage.getItem("admin_access_token"),
              }
            )
            .then((responseee) => {
              window.location.href = "/admin/orders";
              console.log("inside second axios");
              console.log(responseee.data);
            });
        }
      });
  };

  return (
    <div className="container">
      <section id="content" className="text-center">
        <form className="d-flex flex-column justify-content-center form-bg">
          <h1> Admin Login Page</h1>
          <div>
            <input
              type="text"
              placeholder="الاسم "
              required=""
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="كلمة المرور"
              required=""
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            <input
              value="دخول"
              onClick={login}
              type="button"
              className="btn btn-success btn-edit"
            />
            <br />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AdminLogin;

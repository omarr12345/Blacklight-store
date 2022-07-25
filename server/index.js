var cookieParser = require("cookie-parser");
var express = require("express");
var mysql = require("mysql");
const cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var app = express();
var jsonParser = bodyParser.json();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
var fileupload = require("express-fileupload");
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));
var fs = require("fs");
var busboy = require("connect-busboy");
const { json } = require("stream/consumers");
app.use(busboy());
const authenticate = require("./Middlewares/Authenticate");

//Database Connection
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((error) => {
  if (!!error) {
    console.log("error");
    throw error;
  } else console.log("connected");
});
const maxAge = 3 * 24 * 60 * 60;

const createToken = (user_id) => {
  return jwt.sign({ user_id }, "lvmbxsvlrkuvxjvbimzjvkzsawwjtfkg", {
    expiresIn: maxAge,
  });
};

app.post("/api/admin/addproduct", jsonParser, (req, res) => {
  console.log("inside addpr");
  const productName = req.body.productname;
  const productPrice = req.body.productprice;
  const productFirstImg = req.files.uploaded_image_1;
  const productSecImg = req.files.uploaded_image_2;
  const productThirdImg = req.files.uploaded_image_3;
  const productForthImg = req.files.uploaded_image_4;
  const productFifthImg = req.files.uploaded_image_5;
  const productCategory = req.body.productcategory;
  const productDetails = req.body.productdetails;

  productFirstImg.mv(
    "../client/public/Assets/" + productFirstImg.name,
    (err) => {
      if (err) {
        throw err;
      }

      productSecImg.mv(
        "../client/public/Assets/" + productSecImg.name,
        (err) => {
          if (err) {
            throw err;
          }
        }
      );

      productThirdImg.mv(
        "../client/public/Assets/" + productThirdImg.name,
        (err) => {
          if (err) {
            throw err;
          }
        }
      );

      productForthImg.mv(
        "../client/public/Assets/" + productForthImg.name,
        (err) => {
          if (err) {
            throw err;
          }
        }
      );

      productFifthImg.mv(
        "../client/public/Assets/" + productFifthImg.name,
        (err) => {
          if (err) {
            throw err;
          }
        }
      );

      connection.query(
        "INSERT INTO products (name,price,category,details,first_img,sec_img,third_img,forth_img,fifth_img) VALUES (?,?,?,?,?,?,?,?,?)",
        [
          productName,
          productPrice,
          productCategory,
          productDetails,
          productFirstImg.name,
          productSecImg.name,
          productThirdImg.name,
          productForthImg.name,
          productFifthImg.name,
        ],
        (error, result) => {
          if (error) {
            throw error;
          } else {
            console.log("inserting new product is done ");
          }
        }
      );
    }
  );
});

app.get("/api/products", jsonParser, (req, res) => {
  connection.query("SELECT * FROM products ", (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      res.json(rows);
    }
  });
});

app.post("/api/products", jsonParser, (req, res) => {
  connection.query(
    "DELETE FROM products WHERE id=? ",
    [req.body.id],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/product/:id", jsonParser, (req, res) => {
  connection.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    (error, rows) => {
      if (error) {
        throw error;
      } else {
        console.log(rows);
        res.json(rows[0]);
      }
    }
  );
});

app.post("/api/orders", jsonParser, (req, res) => {
  connection.query(
    "INSERT INTO orders (customer_name,customer_address,customer_num,customer_sec_num,customer_notes,product_code,product_quantity,product_name) VALUES (?,?,?,?,?,?,?,?)",
    [
      req.body.CustomerName,
      req.body.CustomerAddress,
      req.body.CustomerNumber,
      req.body.CustomerSecNum,
      req.body.Notes,
      req.body.ProductCode,
      req.body.ProductQuantity,
      req.body.ProductName,
    ],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/orders", jsonParser, (req, res) => {
  connection.query("SELECT * FROM orders ", (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result);
    }
  });
});

app.post("/api/orders/delete", jsonParser, (req, res) => {
  connection.query(
    "DELETE FROM orders WHERE id=" + req.body.id + "",
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json(result);
      }
    }
  );
});

app.post("/api/adminauthentication", async (req, res) => {
  const token = await req.body.token;

  console.log(token);
  if (typeof token != "undefined") {
    res.sendStatus(200);
  } else {
    console.log("error again");
  }
});

app.post("/api/adminlogin", jsonParser, (req, res) => {
  const username = req.body.Username;
  const userpass = req.body.Password;

  connection.query(
    "SELECT * FROM admins WHERE username=? AND password=?",

    [username, userpass],

    (error, rows, fields) => {
      if (!!error) {
        console.log(error);
        return res
          .status(500)
          .send("There was a problem registering the user.");
      } else {
        if (rows.length == 1) {
          console.log(rows.length);

          const token = createToken(rows[0].id);

          res.status(201).json({
            accessToken: token,
            username: username,
            headers: token,
          });
        } else {
          res.status(200).json({ Email: "not found on database" });
        }
      }
    }
  );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

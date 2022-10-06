import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/api/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="home row">
        {products.map((x) => {
          return <Card item={x} key={x.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;

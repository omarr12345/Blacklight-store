import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="home row ">
      {products.map((x) => {
        return <Card item={x} key={x.id} />;
      })}
    </div>
  );
}

export default Home;

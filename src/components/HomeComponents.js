import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomeComponents = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="container">
        {products.map((product, i) => (
          <div key={i}>
            <h5>{product.title}</h5>
            <div className="w-25">
              <img src={product.url} alt="" className="w-100" />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponents;

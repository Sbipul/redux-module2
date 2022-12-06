import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {products.slice(0,20).map((product, i) => (
          <ProductCard cardData={product} key={i} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;

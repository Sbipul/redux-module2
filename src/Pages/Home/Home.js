import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HomeComponents from "../../components/HomeComponents";
import {useSelector} from 'react-redux'
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const state = useSelector((state)=> state)
  console.log(state)
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, i) => (
          <HomeComponents cardData={product} key={i} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;

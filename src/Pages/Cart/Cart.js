import React from 'react';
import ProductCard from '../../components/ProductCard';
import {useSelector} from 'react-redux'
import { Container, Row } from 'react-bootstrap';
const Cart = () => {
    const carts = useSelector((state)=> state.cart);
    console.log(carts)
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
            {
               carts.length && carts.sort((a,b)=>a.id-b.id)?.map((cart,i)=><ProductCard key={i} cardData={cart}/>)
            }
            </Row>
        </Container>
    );
};

export default Cart;
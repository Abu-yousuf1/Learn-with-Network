import React from 'react';
import { Container } from 'react-bootstrap';
import useCart from '../../Hook/useCart';
import useService from '../../Hook/useService';
import CartReview from '../CartReview/CartReview';
import DisplayCart from '../DisplayCart/DisplayCart';

const Cart = () => {
    const [service, setService] = useService()
    const [cart, setCart] = useCart(service)

    return (
        <Container className="row">
            <div className="col-lg-9 border-end">
                {
                    cart.map(serv => <CartReview service={serv} />)
                }
            </div>
            <div className="col-lg-3">
                <DisplayCart cart={cart} />
            </div>
        </Container>
    );
};

export default Cart;
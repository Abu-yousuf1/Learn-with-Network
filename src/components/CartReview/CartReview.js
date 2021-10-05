import React from 'react';
import { Card } from 'react-bootstrap';

const CartReview = (props) => {
    const { name, image, description } = props.service
    return (
        <Card style={{ width: '10rem' }} className="mb-3">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <h5>{name}</h5>
            </Card.Body>
        </Card>
    );
};

export default CartReview;
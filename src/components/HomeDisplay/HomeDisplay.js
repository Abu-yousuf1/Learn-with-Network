import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import './home.css'

const HomeDisplay = (props) => {
    const { name, description, image, icon, price } = props.service
    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="image" src={image} />
                <Card.Body>
                    <Card.Title >{name}</Card.Title>
                    <Card.Text className="text-secondary">
                        {description.slice(0, 70)}
                    </Card.Text>
                    <div className="d-flex">
                        <Rating
                            initialRating={icon}
                            readonly
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                        />
                        <h5 className="ps-3">Price: $ {price}</h5>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeDisplay;
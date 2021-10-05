import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ServiceDisplay = (props) => {

    const { name, description, image, icon, price, id } = props.service
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
                            emptySymbol="fa fa-star-o fa-2x fs-4"
                            fullSymbol="fa fa-star fa-2x fs-4"
                        />
                        <h5 className="ps-5">Price: $ {price}</h5>
                    </div>
                    <button className="btn btn-success w-100 mt-3" onClick={() => props.handleCart(id)}>Add to Cart</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceDisplay;
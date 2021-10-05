import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { addToDb } from '../../Utilities/fakeDb';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';



const Service = () => {
    const [service, setService] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const handleCart = product => {
        const services = service.find(serv => serv.id === product)
        const newCart = [...cart, services]
        setCart(newCart)
        addToDb(product)
    }
    return (
        <Container>
            <Row xs={1} md={3} className="g-5">
                {
                    service.map(ser => <ServiceDisplay
                        key={ser.id}
                        service={ser}
                        handleCart={handleCart}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';


const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={3} className="g-5">
                {
                    service.map(ser => <ServiceDisplay
                        key={ser.id}
                        service={ser} />)
                }
            </Row>
        </Container>
    );
};

export default Service;
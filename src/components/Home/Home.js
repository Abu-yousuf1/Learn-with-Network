import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeDisplay from '../HomeDisplay/HomeDisplay';

const Home = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={3} className="g-5">
                {
                    service.map(ser => <HomeDisplay
                        key={ser.id}
                        service={ser} />)
                }
            </Row>
        </Container>
    );
};

export default Home;
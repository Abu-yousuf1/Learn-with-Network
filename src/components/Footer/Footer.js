import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import { faFacebookSquare, faYoutubeSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
    const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phoneSquare = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <div className="footer-container text-light ">
            <Container className="footer-position row">
                <div className="col-lg-6 text-center py-5">
                    <h1 className="pb-3">Learn With Programming-hero</h1>
                    <span className="text-secondary fs-2 ">{facebook} </span>
                    <span className="text-secondary fs-2 mx-1">{twitter}</span>
                    <span className="text-secondary fs-2 mx-1">{youtube}</span>
                    <span className="text-secondary fs-2 mx-1">{instagram}</span>
                </div>
                <div className="col-lg-3 py-5 ">
                    <Link className="text-secondary fs-4 fw-bold text-decoration-none py-1" to="/home">Home</Link>
                    <Link className="text-secondary fs-4 fw-bold text-decoration-none py-1 d-block" to="/service">Service</Link>
                    <Link className="text-secondary fs-4 fw-bold text-decoration-none py-1 d-block" to="/contact">Contact</Link>
                    <Link className="text-secondary fs-4 fw-bold text-decoration-none py-1 d-block" to="/about">About</Link>
                </div>
                <div className="col-lg-3 py-5 ">
                    <h3>Official info</h3>
                    <div>
                        <p className="text-secondary"> <span>{mapMarker}</span> 30 Commercial Road <br /> Fratton, Australia</p>
                    </div>
                    <div>
                        <p className="text-secondary"> <span>{phoneSquare}</span> 1-888-452-1505</p>
                    </div>
                    <div>
                        <p className="text-secondary"> <span>{envelope}</span> envato@gmail.com <br /> info@mail.com</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
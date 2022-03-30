import React from 'react';
import Avatar from './Avatar';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PersonalInformation() {
    return (
        <div className='section'>
            <Row>
                <Col xs={8}>
                    <h1>ORÇUN GÜRER</h1>
                    <h2>Software Engineer</h2>
                    <Row>
                        <Col xs={12} lg={6}>
                            {/* <a href="tel:+905530567612"><FontAwesomeIcon icon={faPhone} /> +90 553 056 76 12</a> */}
                            <a href="mailto:orcungurer@gmail.com"><FontAwesomeIcon className='fa-icons' icon={faEnvelope} /> orcungurer@gmail.com</a>
                        </Col>
                        <Col xs={12} lg={6}>
                            <span><FontAwesomeIcon icon={faLocationDot} /> Ankara, Turkey</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className='image-container'>
                    <Avatar />
                </Col>
            </Row>
        </div>
    );
}

export default PersonalInformation;
import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TechStack() {
    return (
        <div className='section'>
            <h4>TECH STACK</h4>
            <hr className='section-separator-hr'></hr>
            <Row xs={4}>
                <Col className='tech-stack'>HTML</Col>
                <Col className='tech-stack'>CSS</Col>
                <Col className='tech-stack'>Javascript</Col>
                <Col className='tech-stack'>React</Col>
                <Col className='tech-stack'>Bootstrap</Col>
                <Col className='tech-stack'>SCSS</Col>
                <Col className='tech-stack'>jQuery</Col>
                <Col className='tech-stack'>npm</Col>
            </Row>
        </div>
    );
}

export default TechStack;
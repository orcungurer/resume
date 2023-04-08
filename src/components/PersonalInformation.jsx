import React from "react";
import Avatar from "./Avatar";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function PersonalInformation() {
  return (
    <div className="section">
      <Row>
        <Col xs={8}>
          <h1>Orçun Gürer</h1>
          <h2>Software Engineer | Frontend Developer</h2>
          <Row className="contact-items-row">
            <Col xs={12} lg={6} className="contact-items-col">
              <FontAwesomeIcon className="fa-icons" icon={faEnvelope} />
              <a href="mailto:orcungurer@gmail.com">orcungurer@gmail.com</a>
            </Col>
            <Col xs={12} lg={6} className="contact-items-col">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Ankara, Turkey</span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} className="image-container">
          <Avatar />
        </Col>
      </Row>
    </div>
  );
}

export default PersonalInformation;

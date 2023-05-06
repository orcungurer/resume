import React from "react";
import { Row, Col } from "react-bootstrap";

function TechStack() {
  const techStack = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JavaScript" },
    { label: "Bootstrap" },
    { label: "SCSS" },
    { label: "React.js" },
    { label: "Redux Toolkit" },
    { label: "React Router" },
    { label: "Next.js" },
    { label: "Firebase" },
    { label: "MongoDB" },
    { label: "Git" },
    { label: "REST APIs" },
  ];

  return (
    <div className="section">
      <h4>TECH STACK</h4>
      <hr className="section-separator-hr"></hr>
      <Row xs={4} className="tech-stack-row">
        {techStack.map((stackItem) => (
            <Col key={stackItem.label} className="tech-stack">{stackItem.label}</Col>
        ))}
      </Row>
    </div>
  );
}

export default TechStack;

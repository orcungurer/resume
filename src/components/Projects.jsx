import React from "react";
import { Carousel, Button } from "react-bootstrap";
import projects from "../projects";

function Projects() {
  return (
    <div className="section">
      <h4>PROJECTS</h4>
      <hr className="section-separator-hr"></hr>
      <Carousel fade indicators={false}>
        {projects.map((project) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/" + project.tag + ".png")}
              alt={project.tag}
            />
            <Carousel.Caption>
              <h3 className="project-names">{project.name}</h3>
              {project.link && (
                <Button
                  href={project.link}
                  className="project-buttons"
                  variant="dark"
                >
                  DEMO
                </Button>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;

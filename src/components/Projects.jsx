import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import projects from '../projects';

function Projects() {
    return (
        <div className='section'>
        <h4>PROJECTS</h4>
        <hr className='section-separator-hr'></hr>
            <Carousel fade>

                {projects.reverse().map((project) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/" + project.tag + ".png")} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="project-names">{project.name}</h3>
                            <Button href={project.link} className="project-buttons" variant="outline-light">TRY IT NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>
    );
}

export default Projects;
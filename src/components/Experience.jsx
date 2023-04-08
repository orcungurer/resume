import React from "react";
import ExperienceItem from "./ExperienceItem";
import experiences from "../experiences";

function Experience() {
  return (
    <div className="section">
      <h4>EXPERIENCE</h4>
      <hr className="section-separator-hr"></hr>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          id={experience.id}
          company={experience.company}
          location={experience.location}
          title={experience.title}
          startDate={experience.startDate}
          endDate={experience.endDate}
          description={experience.description}
        />
      ))}
    </div>
  );
}

export default Experience;

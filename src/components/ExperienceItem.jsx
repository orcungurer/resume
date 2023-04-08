import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ExperienceItem(props) {
  return (
    <div>
      <h5>{props.title}</h5>
      <h6>{props.company}</h6>
      <span className="experience-icons">
        <FontAwesomeIcon icon={faCalendarAlt} /> {props.startDate} -{" "}
        {props.endDate}
      </span>
      <span className="experience-icons">
        <FontAwesomeIcon icon={faLocationDot} /> {props.location}
      </span>
      {props.description && (
        <ul>
          {props.description.map((descriptionItem) => (
            <li key={descriptionItem}>{descriptionItem}</li>
          ))}
        </ul>
      )}
      {props.id !== 1 && <hr className="experience-separator-hr"></hr>}
    </div>
  );
}

export default ExperienceItem;

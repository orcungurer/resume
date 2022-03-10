import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Education() {
    return (
        <div className='section'>
            <h4>EDUCATION</h4>
            <hr className='section-separator-hr'></hr>
            <h5>BSc, Software Engineering</h5>
            <h6>Atilim University</h6>
            <span className='experience-icons'><FontAwesomeIcon icon={faCalendarAlt} /> 09/2012 - 06/2017</span>
            <span className='experience-icons'><FontAwesomeIcon icon={faLocationDot} /> Ankara, Turkey</span>
            <ul>
                <li>I have studied Software Engineering at the Engineering Faculty of Atilim University with 50% Success Scholarship. 
                I spent five years at Atilim University including a year in preparatory school and four years in the department and then I graduated without extending my university.</li>
            </ul>
        </div>
    );
}

export default Education;
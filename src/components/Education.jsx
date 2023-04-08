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
        </div>
    );
}

export default Education;
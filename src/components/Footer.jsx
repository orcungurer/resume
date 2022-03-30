import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const date = new Date().getFullYear();
    var rootElement = document.documentElement;

    function scrollToTop() {
        // scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer>
            <button id="scrollToTopBtn" onClick={scrollToTop}><FontAwesomeIcon className='fa-icons' icon={faAngleUp} /></button>
            <div className='social-section'>
                <a className='social-icons' href="https://www.linkedin.com/in/orcungurer/"><FontAwesomeIcon className='fa-icons' icon={faLinkedinIn} /></a>
                {/* <a className='social-icons' href="mailto:orcungurer@gmail.com"><FontAwesomeIcon className='fa-icons' icon={faEnvelope} /></a> */}
                <a className='social-icons' href="tel:+905530567612"><FontAwesomeIcon icon={faPhone} /></a>
                <a className='social-icons' href="https://github.com/orcungurer"><FontAwesomeIcon className='fa-icons' icon={faGithub} /></a>
            </div>
            <p className='footer-text'>© {date} Orcun Gurer</p>
        </footer>
    );
}

export default Footer;
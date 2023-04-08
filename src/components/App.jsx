import React from 'react';
import Container from 'react-bootstrap/Container';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';
import Education from './Education';
import TechStack from './TechStack';
// import Projects from './Projects';
import Footer from './Footer';

function App() {
    return (
        <Container fluid>
            <PersonalInformation />
            <Experience />
            <Education />
            <TechStack />
            {/* <Projects /> */}
            <Footer />
        </Container>
    );
}

export default App;
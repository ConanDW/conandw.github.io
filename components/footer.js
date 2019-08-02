import React from 'react'
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer>
        <Container>
          <a href="https://linkedin.com/in/cam-d-41914b188/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/ConanDW"><FontAwesomeIcon icon={faGithub}  /></a>
          <a href="https://twitter.com/DwConan"><FontAwesomeIcon icon={faTwitter} /></a>
        </Container>
    </footer>
)

export default Footer
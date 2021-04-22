import React from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
const Footer = () => (
    <footer id="contact">
        <Container>
          <a href="https://linkedin.com/in/cam-d-41914b188/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/ConanDW"><FontAwesomeIcon icon={faGithub}  /></a>
          <a href="https://twitter.com/DwConan"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="tel:3303900802"><FontAwesomeIcon icon={faPhoneSquare} /></a>
          <a href="mailto:camday03@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
        </Container>
        <h6>This site is written in React.js and Bootstrap 4</h6>
    </footer>
)
export default Footer
// WEBPACK FOOTER //
// ./src/components/footer.js
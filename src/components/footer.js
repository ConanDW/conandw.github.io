import React from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => (
    <footer>
        <Container>
          <a href="https://linkedin.com/in/cam-d-41914b188/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/ConanDW"><FontAwesomeIcon icon={faGithub}  /></a>
          <a href="https://twitter.com/DwConan"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://t.me/camday"><FontAwesomeIcon icon={faTelegram} /></a>
        </Container>
        <h6>This site is written in React.js and Bootstrap 4</h6>
    </footer>
)
export default Footer
// WEBPACK FOOTER //
// ./src/components/footer.js
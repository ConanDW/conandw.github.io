import React from 'react'
import { Container, Progress } from 'reactstrap'
const Skills = () => (
  <Container fluid>
    <div className="bg-light" style={{padding: "5px"}}>
      <h5>Languages and Frameworks</h5>
      <hr />
      <h6>Automation:</h6>
      <Progress animated color="primary" value="100">PowerShell</Progress>
      <br />
      <Progress animated color="primary" value="75">Bash</Progress>
      <br />
      <Progress animated color="primary" value="50">Python</Progress>
      <br />
      <h6>Software Development:</h6>
      <Progress animated color="primary" value="75">Dart</Progress>
      <br />
      <Progress animated color="primary" value="50">Flutter</Progress>
      <br />
      <h6>Web Development:</h6>
      <Progress animated color="success" value="100">HTML5</Progress>
      <br />
      <Progress animated color="success" value="100">CSS3</Progress>
      <br />
      <Progress animated color="success" value="100">Bootstrap</Progress>
      <br />
      <Progress animated color="success" value="100">Bulma</Progress>
      <br />
      <Progress animated color="success" value="50">JavaScript</Progress>
      <br />
      <Progress animated color="success" value="25">React.js</Progress>
      <br />
    </div>
  </Container>
)
export default Skills
// WEBPACK FOOTER //
// ./src/components/skills.js
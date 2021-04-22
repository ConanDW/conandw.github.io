import React from 'react'
import { Progress } from 'reactstrap';
const Skills = (props) => (
    <div className="bg-light" style={{padding: "5px"}}>
      <h4>Languages and Frameworks</h4>
      <hr />
      <br />
      <Progress animated color="primary" value="10">Redux.js</Progress>
      <br />
      <Progress animated color="primary" value="75">React.js</Progress>
      <br />
      <Progress animated color="primary" value="100">Python</Progress>
      <br />
      <Progress animated color="primary" value="100">Bulma</Progress>
      <br />
      <Progress animated color="primary" value="100">Bootstrap</Progress>
      <br />
      <Progress animated color="primary" value="100">Dart</Progress>
      <br />
      <Progress animated color="primary" value="100">JavaScript</Progress>
      <br />
      <Progress animated color="primary" value="100">CSS3</Progress>
      <br />
      <Progress animated color="primary" value="100">HTML5</Progress>
    </div>
)
export default Skills
// WEBPACK FOOTER //
// ./src/components/skills.js
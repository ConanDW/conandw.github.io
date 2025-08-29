import React from "react";
import { Container, Progress } from "reactstrap";

const Skills = () => (
  <Container fluid>
    <div className="skills-section">
      <h5 className="section-title">Education and Certifications</h5>
      <hr />
      <div className="education">
        <h6>Education:</h6>
        <ul>
          <li>B.S. in Cloud Computing - Azure Track, Western Governors University (In Progress)</li>
          <li>Google IT Automation with Python (May 2025)</li>
          <li>Wayne County Schools Career Center - Robotics and Automation (May 2021)</li>
        </ul>
      </div>
      <hr />
      <div className="certifications">
        <h6>Certifications:</h6>
        <ul>
          <li>Microsoft Certified: Azure Fundamentals</li>
          <li>Comptia A+</li>
          <li>FANUC Operator Certified</li>
          <li>Allen-Bradley Operation and Programming Certified</li>
          <li>Parker Pneumatics Trained</li>
          <li>Lenovo PC Service Certifications</li>
          <li>Dell PC and Server Service Certifications</li>
          <li>Sophos Certified Engineer</li>
          <li>Sophos Certified Endpoint Architect</li>
          <li>Sophos AT15 Firewall Architect</li>
          <li>Nerdio Azure Fundamentals Certified</li>
          <li>Nerdio Manager for MSP</li>
          <li>3CX Basic Certification</li>
          <li>LPI Linux Essentials</li>
        </ul>
      </div>
    </div>
    <div className="bg-light" style={{padding: "5px", backgroundColor: "#36454F"}}>
      <h5 className="section-title">Languages and Frameworks</h5>
      <hr />
      <h5>Automation, Scripting, & DevOps:</h5>
      <SkillBar label="PowerShell" value={100} color="primary" />
      <SkillBar label="JSON REST APIs/Swagger" value={100} color="primary" />
      <SkillBar label="Bash" value={100} color="primary" />
      <SkillBar label="Pester" value={90} color="primary" />
      <SkillBar label="Git" value={90} color="primary" />
      <SkillBar label="Docker" value={90} color="primary" />
      <SkillBar label="Python" value={90} color="primary" />
      <SkillBar label="Kubernetes" value={75} color="primary" />
      <SkillBar label="Puppet" value={50} color="primary" />
      <h5>Software Development:</h5>
      <SkillBar label="Dart" value={85} color="primary" />
      <SkillBar label="Flutter" value={75} color="primary" />
      <h5>Web Development:</h5>
      <SkillBar label="HTML5" value={100} color="success" />
      <SkillBar label="CSS3" value={100} color="success" />
      <SkillBar label="Bootstrap" value={100} color="success" />
      <SkillBar label="Bulma" value={100} color="success" />
      <SkillBar label="JavaScript" value={65} color="success" />
      <SkillBar label="React.js" value={65} color="success" />
      <SkillBar label="Flask" value={65} color="success" />
    </div>
  </Container>
);

const SkillBar = ({ label, value, color }) => (
  <div style={{ marginBottom: "10px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ fontWeight: "bold", marginRight: "10px" }}>{label}</span>
    </div>
    <Progress animated color={color} value={value} style={{ height: "20px" }} />
  </div>
);

export default Skills;
// WEBPACK FOOTER //
// ./src/components/skills.js
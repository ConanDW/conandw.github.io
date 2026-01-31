import React from "react";
import { Container, Badge } from "reactstrap";
import {
  SiGnubash,
  SiPython,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiPuppet,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiBulma,
  SiJavascript,
  SiReact,
  SiFlask,
  SiLinux,
  SiAmazonwebservices,
  SiJson,
  SiApple,
  SiGoogle,
  SiDell,
  SiComptia,
  SiLenovo,
} from "react-icons/si";
import { VscTerminalPowershell, VscAzure } from "react-icons/vsc";
import { FaServer, FaNetworkWired, FaTools, FaFileAlt, FaRobot, FaMicrosoft, FaWindows, FaCog, FaShieldAlt, FaCloudUploadAlt, FaPhone } from "react-icons/fa";
import { MdSecurity, MdPhone } from "react-icons/md";
import { GiRobotAntennas, GiGears, GiValve } from "react-icons/gi";

const skillIcons = {
  "PowerShell": <VscTerminalPowershell />,
  "JSON REST APIs/Swagger": <SiJson />,
  "Bash": <SiGnubash />,
  "Python": <SiPython />,
  "Pester": <FaTools />,
  "Git": <SiGit />,
  "Docker": <SiDocker />,
  "Kubernetes": <SiKubernetes />,
  "Puppet (IaC)": <SiPuppet />,
  "Dart": <SiDart />,
  "Flutter": <SiFlutter />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "Bootstrap": <SiBootstrap />,
  "Bulma": <SiBulma />,
  "JavaScript": <SiJavascript />,
  "React.js": <SiReact />,
  "Flask": <SiFlask />,
  "Windows Desktop Support": <FaMicrosoft />,
  "MacOS Support": <SiApple />,
  "Windows Server Administration (AD, GPOS, etc.)": <FaWindows />,
  "Linux Server Administration": <SiLinux />,
  "MS365 and Entra": <VscAzure />,
  "Virtualization (Hyper-V, etc.)": <FaServer />,
  "Backup and Disaster Recovery": <FaCloudUploadAlt />,
  "Documentation": <FaFileAlt />,
  "Network Support/Troubleshooting": <FaNetworkWired />,
  "AWS Administration": <SiAmazonwebservices />,
  "Azure Administration": <VscAzure />,
  "Security (Firewall, Endpoint, etc.)": <MdSecurity />,
  "Azure Fundamentals": <VscAzure />,
  "Comptia A+": <SiComptia />,
  "Comptia Network+": <FaNetworkWired />,
  "FANUC Operator": <GiRobotAntennas />,
  "Allen-Bradley": <GiGears />,
  "Parker Pneumatics": <GiValve />,
  "Lenovo Certs": <SiLenovo />,
  "Dell Certs": <SiDell />,
  "Sophos Engineer": <FaShieldAlt />,
  "Sophos Endpoint": <FaTools />,
  "Sophos Firewall": <MdSecurity />,
  "Nerdio Azure": <FaCog />,
  "Nerdio MSP": <FaTools />,
  "3CX Certification": <FaPhone />,
  "Linux Essentials": <SiLinux />,
  "AWS Cloud Professional": <SiAmazonwebservices />,
  "Google IT Automation": <SiGoogle />,
};

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
          <li>Triway High School (May 2021)</li>
        </ul>
      </div>
      <hr />
      <div className="certifications">
        <h6>Certifications:</h6>
        <div className="certifications-row">
          <div className="certifications-list-col">
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
              <li>AWS Certified Cloud Professional</li>
              <li>Comptia Network+</li>
            </ul>
          </div>
          <div className="certifications-icons-col">
            <div className="icon-bar">
              <span className="icon-item" title="Azure Fundamentals">{skillIcons["Azure Fundamentals"]}</span>
              <span className="icon-item" title="Comptia A+">{skillIcons["Comptia A+"]}</span>
              <span className="icon-item" title="Comptia Network+">{skillIcons["Comptia Network+"]}</span>
              <span className="icon-item" title="AWS Cloud Professional">{skillIcons["AWS Cloud Professional"]}</span>
              <span className="icon-item" title="Linux Essentials">{skillIcons["Linux Essentials"]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-light" style={{ padding: "20px", backgroundColor: "#36454F" }}>
      <h5 className="section-title">Languages and Frameworks</h5>
      <div className="mb-3">
        <h5>Automation, Scripting, & DevOps:</h5>
        <hr />
        <div className="badge-container">
          <SkillBadge label="PowerShell" color="primary" />
          <SkillBadge label="JSON REST APIs/Swagger" color="primary" />
          <SkillBadge label="Bash" color="primary" />
          <SkillBadge label="Python" color="primary" />
          <SkillBadge label="Pester" color="primary" />
          <SkillBadge label="Git" color="primary" />
          <SkillBadge label="Docker" color="primary" />
          <SkillBadge label="Kubernetes" color="primary" />
          <SkillBadge label="Puppet (IaC)" color="primary" />
        </div>
      </div>

      <div className="mb-3">
        <h5>Software Development:</h5>
        <hr />
        <div className="badge-container">
          <SkillBadge label="Dart" color="primary" />
          <SkillBadge label="Flutter" color="primary" />
        </div>
      </div>

      <div className="mb-3">
        <h5>Web Development:</h5>
        <hr />
        <div className="badge-container">
          <SkillBadge label="HTML5" color="success" />
          <SkillBadge label="CSS3" color="success" />
          <SkillBadge label="Bootstrap" color="success" />
          <SkillBadge label="Bulma" color="success" />
          <SkillBadge label="JavaScript" color="success" />
          <SkillBadge label="React.js" color="success" />
          <SkillBadge label="Flask" color="success" />
        </div>
      </div>

      <div className="mb-3">
        <h5>IT and Cloud Computing:</h5>
        <hr />
        <div className="badge-container">
          <SkillBadge label="Windows Desktop Support" color="info" />
          <SkillBadge label="MacOS Support" color="info" />
          <SkillBadge label="Windows Server Administration (AD, GPOS, etc.)" color="info" />
          <SkillBadge label="Linux Server Administration" color="info" />
          <SkillBadge label="MS365 and Entra" color="info" />
          <SkillBadge label="Virtualization (Hyper-V, etc.)" color="info" />
          <SkillBadge label="Backup and Disaster Recovery" color="info" />
          <SkillBadge label="Documentation" color="info" />
          <SkillBadge label="Network Support/Troubleshooting" color="info" />
          <SkillBadge label="AWS Administration" color="info" />
          <SkillBadge label="Azure Administration" color="info" />
          <SkillBadge label="Security (Firewall, Endpoint, etc.)" color="info" />
        </div>
      </div>
    </div>
  </Container>
);
const SkillBadge = ({ label, color }) => {
  const icon = skillIcons[label];
  return (
    <Badge
      pill
      className="custom-badge m-1 d-inline-flex align-items-center"
      color={color}
    >
      {icon && <span className="badge-icon" style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {label}
    </Badge>
  );
};

export default Skills;

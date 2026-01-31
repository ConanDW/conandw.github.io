import React from "react";
import { Container } from "reactstrap";

const Work = () => (
  <Container fluid>
    <div className="work-section">
      <h5 className="section-title">Professional Experience</h5>
      <hr />
      <div className="job-card">
        <a href="https://www.ipmcomputers.com" className="job-title">
          <h5>IPM Computers LLC</h5>
        </a>
        <small className="job-dates">January 2025 - Present</small>
        <small className="job-dates">October 2024 - January 2025</small>
        <p className="job-position">Lead Developer/T2 Technician</p>
        <p className="job-position">Previous Position: T1 Technician/Junior Developer</p>
        <p className="job-description">
          Led development and implementation of enterprise automation solutions while managing DevOps processes and CI/CD pipelines. Designed and developed a custom webhook server for automated system integrations. Implemented Microsoft Graph API integrations for enhanced workflow automation.
          Developed multiple workflow automations, process automations, and platform integrations using PowerShell, Python, C#, GraphQL, and Bash. Developed RMM/B2B solutions using a multitude of APIs.
        </p>
      </div>
      <div className="job-card">
        <a href="https://www.wts.com" className="job-title">
          <h5>World Wide Tech Services</h5>
        </a>
        <small className="job-dates">January 2023 - October 2024</small>
        <p className="job-position">Server Technician</p>
        <p className="job-description">
          Specialized in enterprise-level deployment and configuration of Dell and server infrastructure. Executed comprehensive hardware and software implementations for business endpoint solutions. Repaired and configured Dell and Lenovo desktops and laptops. Participated in client-focused deployments and configurations for new business establishments.
        </p>
      </div>
      <div className="job-card">
        <a href="https://camerondaycustomwebsites.net" className="job-title">
          <h5>Cameron Day Custom Websites</h5>
        </a>
        <small className="job-dates">March 2019 - December 2023</small>
        <p className="job-position">Web Developer</p>
        <p className="job-description">
          Founded and managed a web development company, delivering custom solutions across diverse industry sectors. Oversaw full-stack development projects, Firebase implementations, and business POS servers. Successfully scaled operations through strategic hiring and project management.
        </p>
      </div>
      <div className="job-card">
        <h5>Independent Web Design and Server Management</h5>
        <small className="job-dates">August 2018 - March 2019</small>
        <p className="job-position">Web Developer/Systems Administrator</p>
        <p className="job-description">
          Provided comprehensive web development services, including full-stack application development and Linux/Windows server administration. Specialized in frontend application deployment and Linux server maintenance.
        </p>
      </div>
    </div>
  </Container>
);

export default Work;
// WEBPACK FOOTER //
// ./src/components/work.js
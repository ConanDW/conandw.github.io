import React from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


const Projects = () => (
  <Container fluid>
    <div className="projects-section">
      <h5 className="section-title">Showcase Projects</h5>
      <hr />
      <div className="project-cards">
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">IPM PowerShell Module</CardTitle>
            <CardText>
              A PowerShell module combining API functions and commonly used utilities into a single codebase. This module accelerates API integration development and streamlines workflows.
            </CardText>
          </CardBody>
        </Card>
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">Platform Integrations</CardTitle>
            <CardText>
              Integrations with Syncro PSA, Sophos API, Spamhaus API, and more to automate ticket creation, alerting, inventory/billing management, workflow automation, and process automation.
            </CardText>
          </CardBody>
        </Card>
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">Zabbix Integrations</CardTitle>
            <CardSubtitle>
              <a href="https://api.ipmrms.com/CDN/tasks.html" className="link-info">Planner Integration | </a>
              <a href="https://api.ipmrms.com/CDN/verizon.html" className="link-info">Verizon Integration</a>
            </CardSubtitle>
            <CardText>
              <b>Planner Integration:</b> An integration using MS Graph API and Zabbix API to display company tasks from MS Planner on a dashboard. Tasks are dynamically updated.
              <br />
              <b>Verizon Integration:</b> An integration using Verizon Reveal API and Zabbix API to overcome limitations of Verizon's Reveal Portal.
            </CardText>
          </CardBody>
        </Card>
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">Custom Webhook Server and API</CardTitle>
            <CardSubtitle>
              <a href="https://api.ipmrms.com/health" className="link-info">See Integration</a>
            </CardSubtitle>
            <CardText>
              A lightweight webhook server written in Python using Flask. It handles incoming webhooks and routes data to appropriate services.
            </CardText>
          </CardBody>
        </Card>
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">Web Design Catalog</CardTitle>
            <CardSubtitle>
              <a href="https://github.com/cameron-day-custom-websites" className="link-info">See Code</a>
            </CardSubtitle>
            <CardText>
              A collection of websites and web apps created as a freelance web designer. Built using HTML, CSS, JavaScript, Bootstrap, and React.
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  </Container>
);

export default Projects;
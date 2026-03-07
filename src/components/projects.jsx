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
            <CardTitle tag="h5">TypeShell</CardTitle>
            <CardText>
              <CardSubtitle>
                <a href="https://github.com/ConanDW/TypeShell" className='link-info'>See Code</a>
              </CardSubtitle>
              <CardText>
                A PowerShell 7 wrapper and C# transpiler that fixes some of the quirks of PowerShell. Can be written as native TypeShell with a .ts1 extension and transpiled to PowerShell.
              </CardText>
            </CardText>
          </CardBody>
        </Card>
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">Business Integrations</CardTitle>
            <CardText>
              Integrations with Syncro PSA, Sophos API, Spamhaus API, and more to automate ticket creation, alerting, inventory/billing management, workflow automation, and process automation.
            </CardText>
            <CardSubtitle>
              <b>Showcase Examples:</b>
              <br />
              <a href="https://api.ipmrms.com/CDN/tasks.html" className="link-info">Planner Integration | </a>
              <a href="https://api.ipmrms.com/CDN/verizon.html" className="link-info">Verizon Integration</a>
            </CardSubtitle>
            <CardText>
              <b>Microsoft Planner Integration:</b> An integration using MS Graph API and Zabbix API to display company tasks from MS Planner on a dashboard. Tasks are dynamically updated.
              <br />
              <b>Verizon Integration:</b> An integration using Verizon Reveal API and Zabbix API to overcome limitations of Verizon's Reveal Portal.
            </CardText>
          </CardBody>
        </Card>
        <Card className="project-card">
          <CardBody>
            <CardTitle tag="h5">Hardware Monitor</CardTitle>
            <CardText>
              An inhouse C# harware monitor that monitors the health of the cpu, psu, ram, storage, and more of servers and workstations. This was built to over come the limitations of the built-in Windows tools/Datto RMM.
              Uses the LibreHardwareMonitor library to gather hardware information. Reports back to Datto RMM using a PowerShell script to prase it's JSON output.
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
              A lightweight webhook server written in PowerShell and Python using the Flask framework. It handles incoming webhooks and routes data to appropriate apis to create tickets or alerts.
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
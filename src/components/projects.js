import React from 'react'
import { Container, Card, CardGroup, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Projects = () => (
    <Container fluid>
        <div className="bg-light" style={{Padding: "5px"}}>
        <h5>Showcase Projects</h5>
        <hr />
        <CardGroup>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        IPM PowerShell Module
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 link-info"
                        tag="h6"
                        color='link-info'
                    >
                    </CardSubtitle>
                    <CardText>
                        PowerShell module combining api functions and our most commonly used functions into one code base. 
                        The module allows us to use one code base to interact with multiple api's and get back the same, formatted, data based on the api call taken.
                        This allows us to accelerate and streamline api integrations development. This is a manifest based PowerShell module.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Zabbix/Planner Integration
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 link-info"
                        tag="h6"
                        color='link-info'
                    >
                        <a href='https://api.ipmrms.com/CDN/tasks.html' class='link-info'>See Integration</a>
                    </CardSubtitle>
                    <CardText>
                        An integration using MS graph api and Zabbix to display company tasks on a dashboard in Zabbix. Note if there are no tasks it will be blank.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Web Design Catalog
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 link-info"
                        tag="h6"
                        color='link-info'
                    >
                        <a href='https://github.com/cameron-day-custom-websites' class='link-info'>See code</a>
                    </CardSubtitle>
                    <CardText>
                        Collection of websites and web apps that I have written as a freelance web designer.
                        The websites are written in HTML, CSS, JS, Bootstrap or Bulma. Web apps are written in React.
                    </CardText>
                </CardBody>
            </Card>
        </CardGroup>

        </div>
    </Container>
)
export default Projects
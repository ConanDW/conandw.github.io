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
                        <a href='https://github.com/ConanDW/IPMPowershellModule' class='link-info'>See code</a>
                    </CardSubtitle>
                    <CardText>
                        PowerShell module combining api functions and our most commonly used functions into one code base.
                        This allows us to accelerate and streamline script development.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        RMM Scripts
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 link-info"
                        tag="h6"
                        color='link-info'
                    >
                        <a href='https://github.com/ConanDW/RMM-CD' class='link-info'>See code</a>
                    </CardSubtitle>
                    <CardText>
                        Collection of scripts and monitors written for the Datto RMM platform.
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
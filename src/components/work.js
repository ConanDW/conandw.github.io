import React from "react"
import { Container } from 'reactstrap'
const Work = () => (
    <Container fluid>
        <div className="bg-light" style={{ padding: "5px" }}>
            <h5>Work Experience</h5>
            <hr />
            <div style={{ padding: "5px" }}>
                <a href="https://www.wwts.com" class="link-info"><h5>IPM Computers LLC</h5></a>
                <small className="text-muted">October 2024 - Present</small>
                <h6><i>Tier 1 Technician/PowerShell Developer</i></h6>
                <h6>Answered customer calls and helped them troubleshoot software issues. Installed network and VOIP hardware and performed basic network troubleshooting.
                    Wrote and maintained PowerShell scripts for workflow automations. Developed PowerShell module to streamline our PowerShell codebase. Developed documentation
                    for said codebase. Designed and configured integrations using JSON REST APIS. Worked with Datto/AutoTask platforms and designed scripts for those platforms.
                    Sophos, 3CX, Nerdio certified.
                </h6>
                <br />
                <div style={{margin: "15px"}}><span></span></div>
                <br />
                <a href="https://www.wts.com" class="link-info"><h5>World Wide Tech Services</h5></a>
                <small className="text-muted">January 2023 - October 2024</small>
                <h6><i>Server Support Engineer</i></h6>
                <h6>Repaired Dell and Lenovo client endpoint devices such as laptops, servers, and desktops onsite. Deployed software and configured Dell servers.
                    Configured Dell workstations with required software and hardware for business upgrading endpoints. Configured and installed new endpoints for
                    new businesses before they opened.
                </h6>
                <br />
                <div style={{margin: "15px"}}><span></span></div>
                <br />
                <a href="https://camerondaycustomwebsites.net" class="link-info"><h5>Cameron Day Custom Websites</h5></a>
                <small className="text-muted">March 2019 - December 2023</small>
                <h6><i>Owner</i></h6>
                <h6>Ran day-to-day business operations, developed all websites, configured firebase, made sales calls, hired employees. 
                    Made large and small websites for a variety of customers in a variety of industries.</h6>
                <br />
                <div style={{margin: "15px"}}><span></span></div>
                <br />
                <h5>Conan Developer of Webs</h5>
                <small className="text-muted">August 2018 - March 2019</small>
                <h6><i>Freelance Developer</i></h6>
                <h6>Developed websites, managed linux and windows servers, setup Node.js applications.</h6>
            </div>
        </div>
    </Container>
)
export default Work
// WEBPACK FOOTER //
// ./src/components/work.js
import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Container } from 'reactstrap'
import Resume from '../data/camdayresume.pdf'
const Info = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)
    return (
        <Jumbotron id="mainJumbo" className="text-white">
            <div style={{ padding: "5px" }}>
                <h1 className="display-5">Software Craftsman</h1>
                <br />
                <p className="lead"><i>I am an independent developer striving to make relationships with industry experts. My purpose is to create software and automation that impowers workflows and processes.
                    I pride myself on my functional and sematic code made exactly to the required specifications. 
                </i></p>
            </div>
            <Dropdown dark isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Portfolio and Resume
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Links for my resume and web design portfolio.</DropdownItem>
                <DropdownItem><a href={ Resume } download>Resume</a></DropdownItem>
                <DropdownItem><a href="https://camerondaycustomwebsites.net/portfolio">Portfolio</a></DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </Jumbotron>
    );
}
export default Info
// WEBPACK FOOTER //
// ./src/components/info.js

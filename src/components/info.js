import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron } from 'reactstrap'
import Resume from '../data/camdayresume.pdf'
const Info = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)
    return (
        <Jumbotron id="mainJumbo" className="text-white">
            <div style={{ padding: "5px" }}>
                <h1 className="display-5">Software Craftsman</h1>
                <br />
                <p className="lead"><i>I am an independent developer striving to make relationships with industry experts. My purpose is to create software that impowers my fellow mans ambitions and goals.
                    I pride myself on my functional and sematic code made exactly to the required specifications. 
                    My portfolio and contact information can be found by clicking the "Important Links" button. </i></p>
            </div>
            <Dropdown dark isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Important Links
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Links for contacting me and my resume.</DropdownItem>
                <DropdownItem><a href={ Resume } download>Resume</a></DropdownItem>
                <DropdownItem><a href="https://camerondaycustomwebsites.net/portfolio">Portfolio</a></DropdownItem>
                <DropdownItem><a href="#contact">Contact Me</a></DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </Jumbotron>
    )
}
export default Info
// WEBPACK FOOTER //
// ./src/components/info.js

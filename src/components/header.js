import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Me from '../data/me.jpg'
const Header = () => (
  <div>
      <Navbar className="topBar" color="white" light expand="md" style={{"pointerEvents": "none", "cursor": "default"}}>
          <NavbarBrand href="/" className="navBarFont"><img src={ Me } className="me" alt="Cameron Day"></img>Cameron Day</NavbarBrand>
          <Nav className='me-auto' navbar>
            <NavItem><a href="tel:3303900802" style={{ padding: "5px", color: "GrayText" }}><FontAwesomeIcon icon={faPhoneSquare} />330-390-0802</a></NavItem>
            <NavItem><a href="mailto:camday03@gmail.com" style={{ padding: "5px", color: "GrayText" }}><FontAwesomeIcon icon={faEnvelopeSquare} />camday03@gmail.com</a></NavItem>
          </Nav>
      </Navbar>
  </div>
)
export default Header



// WEBPACK FOOTER //
// ./src/components/header.js
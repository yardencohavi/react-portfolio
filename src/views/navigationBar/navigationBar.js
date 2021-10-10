import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'
import './navigation.css'

function createLinks() {
    return navigationLinks.map((e,idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function navigationBar() {
    return (
        <div>
            <Navbar className="navigation__container" expand="md" style={{ zIndex: '2', position:'fixed',width:"100%",top:'0'}}>
            <Navbar.Brand style={{ marginLeft:'1rem'}} href="#home">Yarden Cohavi</Navbar.Brand>
            <a href="\assets\CVs.pdf" download className="icon__cv bi-file-earmark-person"><span className="text__hide">text</span></a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ justifyContent:'flex-end', marginRight:'1rem',marginLeft:'1rem'}}>
                <Nav className="links">
                     {createLinks()}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navigationBar

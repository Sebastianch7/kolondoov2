import React from 'react';
import ItemMenu from '../Items/ItemMenu';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import items from '../../Content/ItemMenu.json'

function Header({ }) {
    return (
        <>
            <Navbar expand={"lg"} className="navbar-light bg-white clean-navbar">
                <Container className='bg-body-tertiary container-header justify-content-between'>
                    <Navbar.Brand>
                        <a href='/'><img src="/img/Logo.png" alt="Logo" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navcol-1" />
                    <Navbar.Collapse id="navcol-1">
                        <Nav
                            className="mx-auto container-menu" navbarScroll>
                            {items.map((item, key) => (
                                <ItemMenu key={key} title={item.title} children={item.children} />
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <BreadCrumb></BreadCrumb>
        </>
    );
}

export default Header;
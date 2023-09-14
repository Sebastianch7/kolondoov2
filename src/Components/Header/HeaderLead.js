import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import { useTranslation } from 'react-i18next';

export default function HeaderLead() {
    const { t } = useTranslation();
    return (
        <>
             <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <a href='/'><img src="/img/LogoReverse.png" alt="Logo" /></a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />

            <BreadCrumb></BreadCrumb>
        </>
    );
}

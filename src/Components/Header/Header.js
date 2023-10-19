
import ItemMenu from '../Items/ItemMenu';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import items from '../../Content/ItemMenu.json'
import ChangeLang from '../Utils/ChangeLang'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Header({ }) {
    const { t } = useTranslation();

    return (
        <>
            <Navbar sticky='top' expand={"lg"} className="navbar-light bg-white clean-navbar my-4 my-xxl-0">
                <Container className='container-header justify-content-between'>
                    <Navbar.Brand>
                        <a href='/'><img src="/img/Logo.png" alt="Logo" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="mx-auto container-menu" navbarScroll>
                            {items.map((item, key) => (
                                <ItemMenu key={key} title={t(item.title)} children={item.children} />
                            ))}
                            {/* <ChangeLang></ChangeLang> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <BreadCrumb></BreadCrumb>
        </>
    );
}

export default Header;
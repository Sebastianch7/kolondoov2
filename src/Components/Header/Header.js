
import ItemMenu from '../Items/ItemMenu';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import items from '../../Content/ItemMenu.json'
import ChangeLang from '../Utils/ChangeLang'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ItemMenuDesktop from '../Items/ItemMenuDesktop';
import { isMobile } from 'react-device-detect';

function Header({ breadCrumb }) {
    const { t } = useTranslation();

    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar sticky='top' expand={"lg"} className="navbar-light bg-white clean-navbar my-4 my-xxl-0">
                <Container className='container-header justify-content-between'>
                    <Navbar.Brand>
                        <a href={`/es-es`}><img src="/img/logos/logo.svg" alt="Logo" /></a>
                    </Navbar.Brand>
                    {isMobile && (
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto container-menu">
                                    {items.map((item, key) => (
                                        <ItemMenu key={key} data={item} />
                                    ))}

                                </Nav>
                            </Navbar.Collapse>
                        </>
                    )}
                    {!isMobile && (
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto container-menu">
                                    {items.map((item, key) => (
                                        <ItemMenuDesktop key={key} data={item} />
                                    ))}
                                    <nav className="navbar navbar-expand-lg navbar-light no-link">
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="no-link navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link no-link" href={`/es-es/Blog`}>{'Blog'}</a>
                                                    <div className="submenu">
                                                        <a className="dropdown-item" href="/es-es/blog">Todas</a>
                                                        <a className="dropdown-item" href="/es-es/blog/internet">Internet</a>
                                                        <a className="dropdown-item" href="/es-es/blog/movil">Móvil</a>
                                                        <a className="dropdown-item" href="/es-es/blog/television">Televisión</a>
                                                        <a className="dropdown-item" href="/es-es/blog/energia">Energía</a>
                                                        <a className="dropdown-item" href="/es-es/blog/hogar">hogar</a>
                                                        <a className="dropdown-item" href="/es-es/blog/mejores-ofertas">Mejores ofertas</a>
                                                        <a className="dropdown-item" href="/es-es/blog/seguros">Seguros</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    )}

                </Container>
            </Navbar>

            {breadCrumb &&
                <BreadCrumb></BreadCrumb>
            }
        </>
    );
}

export default Header;
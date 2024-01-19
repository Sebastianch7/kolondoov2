
import ItemMenu from '../Items/ItemMenu';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import items from '../../Content/ItemMenu.json'
import ChangeLang from '../Utils/ChangeLang'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
                        <a href={`/${lang}`}><img src="/img/logos/logo.svg" alt="Logo" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="mx-auto container-menu">
                            {items.map((item, key) => (
                                <ItemMenu key={key} data={item} />
                            ))}
                            <div class="no-link navbar-nav">
                                <a aria-expanded="false" class="nav-item dropdown" href="/es-es/blog/hogar">
                                    <a id="collasible-nav-dropdown" aria-expanded="false" role="button" class="dropdown-toggle nav-link" tabindex="0" href="#">
                                        <a class="no-link" href="/es-es/blog">Blog</a>
                                    </a>
                                    <div aria-labelledby="collasible-nav-dropdown" data-bs-popper="static" class="dropdown-menu">
                                        <a class="dropdown-item" href="/es-es/blog">Todas</a>
                                        <a class="dropdown-item" href="/es-es/blog/internet">Internet</a>
                                        <a class="dropdown-item" href="/es-es/blog/movil">Móvil</a>
                                        <a class="dropdown-item" href="/es-es/blog/television">Televisión</a>
                                        <a class="dropdown-item" href="/es-es/blog/energia">Energía</a>
                                        <a class="dropdown-item" href="/es-es/blog/hogar">hogar</a>
                                        <a class="dropdown-item" href="/es-es/blog/mejores-ofertas">Mejores ofertas</a>
                                        <a class="dropdown-item" href="/es-es/blog/seguros">Seguros</a>
                                    </div>
                                </a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {breadCrumb &&
                <BreadCrumb></BreadCrumb>
            }
        </>
    );
}

export default Header;
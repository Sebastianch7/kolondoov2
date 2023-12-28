
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
    },[])


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
                                <ItemMenu key={key} title={t(item.title)} children={item.children} />
                            ))}
                            <ChangeLang></ChangeLang>
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
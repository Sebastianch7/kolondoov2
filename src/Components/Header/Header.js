
import ItemMenu from '../Items/ItemMenu';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import items from '../../Content/ItemMenu.json'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ItemMenuDesktop from '../Items/ItemMenuDesktop';
import { isMobile } from 'react-device-detect';
import Accordion from 'react-bootstrap/Accordion';
import { getMenuBlog } from '../../services/ApiServices';


function Header({ breadCrumb }) {
    const { t } = useTranslation();

    const [lang, setLang] = useState('es-es')
    const location = useLocation();
    const [menu, setMenu] = useState([])
    const [isLoadInformation, setIsLoadInformation] = useState(false)

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setIsLoadInformation(true);
        const fetchMenu = async () => {
            try {
                const response = await getMenuBlog()
                setMenu(response);
            } catch (error) {
                console.error("Error al obtener el menu", error);
            }
        };
        fetchMenu();
    }, []);

    return (
        <>
            <Navbar sticky='top' expand={"lg"} className="navbar-light bg-white clean-navbar my-4 my-xxl-0">
                <Container className='container-header'>
                    <Navbar.Brand>
                        <a href={`/es`}><img src="/img/logos/logo.svg" alt="Logo" /></a>
                    </Navbar.Brand>
                    {isMobile && (
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse>
                                <Nav className="mx-auto container-menu">
                                    {items.map((item, key) => (
                                        <Accordion className='no-radius no-border-bottom'>
                                            <Accordion.Item eventKey={key} className='no-radius'>
                                                <Accordion.Header>{item.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        {
                                                            item.children.map((sub, index) => {
                                                                return <a className='no-link text-left' href={`/es${sub.url}`}><li className='text-left'>{sub.name}</li></a>
                                                            })
                                                        }
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    ))}
                                    <Accordion className='no-radius no-border-bottom'>
                                        <Accordion.Item eventKey={100} className='no-radius'>
                                            <Accordion.Header>{'Blog'}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                <a className="no-link text-left" href={`/es/blog`}><li className='text-left'>{'Todas'}</li></a>
                                                    {menu?.length > 0 &&
                                                        menu.map((item, index) => {
                                                            if (item.slug !== 'sin-categoria' && item.slug !== 'destacado') {
                                                                return <a key={index} className="no-link text-left" href={`/es/blog/${item.slug}`}><li className='text-left'>{item.name}</li></a>
                                                            }
                                                        })
                                                    }
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
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
                                                    <a className="nav-link no-link" href={`/es/blog`}>{'Blog'}</a>
                                                    <div className="submenu">
                                                        <a className="dropdown-item" href={`/es/blog`}>{'Todas'}</a>
                                                        {menu?.length > 0 &&
                                                            menu.map((item, index) => {
                                                                if (item.slug !== 'sin-categoria' && item.slug !== 'destacado') {
                                                                    return <a key={index} className="dropdown-item" href={`/es/blog/${item.slug}`}>{item.name}</a>
                                                                }
                                                            })
                                                        }
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
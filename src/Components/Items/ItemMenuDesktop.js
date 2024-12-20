import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSSR, useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

function ItemMenuDesktop({ data }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light no-link">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="no-link navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link no-link" href={!data.titleUrl.includes('herramientas') ? `/${lang}${data.titleUrl}` : null}>{data.title}</a>
                        <div className="submenu">
                            {data.children.map((item, key) => (
                                <a className='dropdown-item' href={`/${lang}${item.url}`}>{t(item.name)}</a>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default ItemMenuDesktop;

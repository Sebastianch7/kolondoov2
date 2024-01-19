import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSSR, useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

function ItemMenu({ data }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    const { t } = useTranslation();
    return (
        <Nav className='no-link'>
            <NavDropdown
                title={!data.titleUrl.includes('herramientas') ? <Link to={`/${lang}${data.titleUrl}`} className='no-link'>{data.title}</Link> : data.title }
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                aria-expanded={show}
                as={Link}
            >
                {data.children.map((item, key) => (
                    <Link className='dropdown-item' to={`/${lang}${item.url}`} key={key}>
                        {t(item.name)}
                    </Link>
                ))}
            </NavDropdown>
        </Nav>
    );
}

export default ItemMenu;
import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSSR, useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

function ItemMenu({ title, children }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    },[])

    const { t } = useTranslation();
    
    const [show, setShow] = useState(false);

    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <Nav>
            <NavDropdown title={title} id="collasible-nav-dropdown" show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                aria-expanded={true}
                >
                {children.map((item, key) => 
                    <Link className='dropdown-item' to={`/${lang}${item.url}`} key={key}>{t(item.name)}</Link>
                    )}
            </NavDropdown>
        </Nav>
    );
}

export default ItemMenu;
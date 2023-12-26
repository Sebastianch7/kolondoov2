import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ItemMenu({ title, children }) {
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
            <NavDropdown title={title} id="collasible-nav-dropdown"  show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                aria-expanded={true}
                >
                {children.map((item, key) => 
                    <a className='dropdown-item' href={item.url} key={key}>{t(item.name)}</a>
                    )}
            </NavDropdown>
        </Nav>
    );
}

export default ItemMenu;
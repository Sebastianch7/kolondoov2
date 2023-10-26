import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ItemMenu({ title, children }) {
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
                    <Link className='dropdown-item' to={item.url} key={key}>{item.name}</Link>
                    )}
            </NavDropdown>
        </Nav>
    );
}

export default ItemMenu;
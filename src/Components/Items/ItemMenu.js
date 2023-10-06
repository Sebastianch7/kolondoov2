import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

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
            <NavDropdown title={title} id="basic-nav-dropdown" show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}>
                {children.map((item, key) =>
                    <NavDropdown.Item key={key} href={item.url}>{item.name}</NavDropdown.Item>
                )}
            </NavDropdown>
        </Nav>
    );
}

export default ItemMenu;
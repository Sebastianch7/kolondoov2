import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

function ItemMenu({ title, children }) {
    return (
        <Nav>
            <NavDropdown title={title} id="basic-nav-dropdown">
                {children.map((item, key) =>
                    <NavDropdown.Item key={key} href={item.url}>{item.name}</NavDropdown.Item>
                )}
            </NavDropdown>
        </Nav>
    );
}

export default ItemMenu;
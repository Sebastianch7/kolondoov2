import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

function ItemFiltro({ id, logo, name, onValueChange }) {
    const [isActive, setIsActive] = useState(false)
    const handleFilterBrand = (newValue) => {
        onValueChange(newValue);
    };
    return (
        <Col xs={4} md={6}>
            <button
                key={name}
                className={'filtro-producto-logo my-2'}
                value={name}

                onClick={() => {
                    handleFilterBrand(id);
                    setIsActive(true)
                }}
            >
                <img src={logo} alt={name} />
            </button>
        </Col>
    );
}

export default ItemFiltro;
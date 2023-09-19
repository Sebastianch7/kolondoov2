import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

function ItemFiltro({ image, name, onValueChange }) {
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
                    handleFilterBrand(name);
                    setIsActive(true)
                }}
            >
                <img src={image} />
            </button>
        </Col>
    );
}

export default ItemFiltro;
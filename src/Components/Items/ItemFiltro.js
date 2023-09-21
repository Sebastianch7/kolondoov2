import React from 'react';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

function ItemFiltro({ id, logo, name, onValueChange }) {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const handleFilterBrand = (newValue) => {
        onValueChange(newValue);
    };
    return (
        <Col xs={4} md={6}>
            <button
                key={name}
                className={`filtro-producto-logo my-2 ${selectedBrand === id ? 'pruebaBtn' : ''}`}
                value={name}

                onClick={() => {
                    handleFilterBrand(id);
                    setSelectedBrand(id)
                }}
            >
                <img src={logo} alt={name} />
            </button>
        </Col>
    );
}

export default ItemFiltro;
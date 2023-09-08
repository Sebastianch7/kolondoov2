import React from 'react';
import { Col } from 'react-bootstrap';
function ItemFiltro({ image }) {
    return (
        <Col md={6}>
            <div className='filtro-producto-logo my-2'>
                <img src={image} />
            </div>
        </Col>
    );
}

export default ItemFiltro;
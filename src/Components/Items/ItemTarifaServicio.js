import React from 'react';
import { Col } from 'react-bootstrap';
function ItemTarifaServicio({data}) {
    return (
        <Col md={6}>
            <div className='tarjeta-tarifa-item-service '>
                <h5>{data.cant}</h5>
                <span>{data.service}</span>
            </div>
        </Col>
    );
}

export default ItemTarifaServicio;
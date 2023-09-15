import React from 'react';
import { Col } from 'react-bootstrap';
function ItemTarifaServicio({cant, service}) {
    return (
        <Col md={6}>
            <div className='tarjeta-tarifa-item-service '>
                <h5>{cant.replace('.',',')}</h5>
                <span>{service}</span>
            </div>
        </Col>
    );
}

export default ItemTarifaServicio;
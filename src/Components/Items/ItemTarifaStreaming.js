import React from 'react';
import { Col } from 'react-bootstrap';
function ItemTarifaStreaming({ cant, service, money = '', design }) {
    return (
        <Col xs={6}>
            <div className='tarjeta-tarifa-streaming-item text-center my-2'>
                <h6>{cant}</h6>
                <span>{service}{money}</span>
            </div>
        </Col>
    )
}

export default ItemTarifaStreaming;
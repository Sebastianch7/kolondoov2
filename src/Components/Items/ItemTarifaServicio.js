import React from 'react';
import { Col } from 'react-bootstrap';
function ItemTarifaServicio({ cant, service, money, design }) {
    return (
        (design !== 'small') ?
            <Col xs={6}>
                <div className='tarjeta-tarifa-item-service text-center'>
                    <h5>{money} {cant}</h5>
                    <span>{service}</span>
                </div>
            </Col>
            :
            <Col xs={12}>
                <div className='tarjeta-tarifa-item-service tarjeta-tarifa-item-service-small text-center my-2'>
                    <h5>{cant}{money}</h5>
                    <span>{service}</span>
                </div>
            </Col>
    );
}

export default ItemTarifaServicio;
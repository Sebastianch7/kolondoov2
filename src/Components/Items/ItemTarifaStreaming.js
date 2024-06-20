import React from 'react';
import { Col } from 'react-bootstrap';
function ItemTarifaStreaming({ cant, service, money = '', design }) {
    const formatNumber = (amount) => {
        const number = parseFloat(amount);
        // Convertir a cadena, luego usar regex para agregar puntos como separadores de miles
        return number.toFixed(2).replace(/\.00$/, '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (
        <Col xs={6}>
            <div className='tarjeta-tarifa-streaming-item text-center my-2'>
                <h6>{cant}</h6>
                <span>{money}{formatNumber(service)}</span>
            </div>
        </Col>
    )
}

export default ItemTarifaStreaming;
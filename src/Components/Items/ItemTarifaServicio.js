import React from 'react';
import { Col } from 'react-bootstrap';
function ItemTarifaServicio({ cant, service, money, design, destacada, precio }) {

    const formatNumber = (amount) => {
        const number = parseFloat(amount);
        // Convertir a cadena, luego usar regex para agregar puntos como separadores de miles
        return number.toFixed(2).replace(/\.00$/, '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        (design !== 'small') ?
            <Col xs={6}>
                <div className={`tarjeta-tarifa-item-service text-center my-2 ${destacada && 'bg-primary text-white'}`}>
                    {precio ? <h5>{money}{formatNumber(cant)}</h5> : <h5>{money}{(cant)}</h5>}
                    <span>{service}</span>
                </div>
            </Col>
            :
            <Col xs={12}>
                <div className='tarjeta-tarifa-item-service tarjeta-tarifa-item-service-small text-center my-2'>
                    {precio ? <h5>{money}{formatNumber(cant)}</h5> : <h5>{money}{(cant)}</h5>}
                    <span>{service}</span>
                </div>
            </Col>
    );
}

export default ItemTarifaServicio;
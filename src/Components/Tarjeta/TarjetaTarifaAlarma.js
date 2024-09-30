import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import ItemTarifaStreaming from '../Items/ItemTarifaStreaming';
import ItemTarifaAlarma from '../Items/ItemTarifaAlarma';

function TarjetaTarifaAlarma({ data }) {
    const formatNumber = (amount) => {
        const number = parseFloat(amount);
        // Convertir a cadena, luego usar regex para agregar puntos como separadores de miles
        return number.toFixed(2).replace(/\.00$/, '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const {
        proveedor_nombre,
        proveedor_id,
        proveedor_logo,
        decimales,
        id,
        proveedor,
        selector_1,
        precio_1,
        divisa_1,
        selector_2,
        precio_2,
        divisa_2,
        parrilla_1,
        parrilla_2,
        parrilla_3,
        parrilla_4,
        url_redirct,
        destacada,
        estado,
        pais,
    } = data;
    return (
        <>
            <Card key={''} className='m-1 mx-md-3 tarjeta-tarifa-alarma tarjeta text-center'>
                <Row>
                    <Col md={12}>
                        <img src={proveedor_logo} alt={proveedor_logo} />
                        <hr></hr>
                    </Col>
                    <Col xs={12} md={12} className='tarjeta-tarifa-alarma-content py-4'>
                        <Row>
                            {(parrilla_1 != null) && <ItemTarifaAlarma item={parrilla_1} />}
                            {(parrilla_2 != null) && <ItemTarifaAlarma item={parrilla_2} />}
                            {(parrilla_3 != null) && <ItemTarifaAlarma item={parrilla_3} />}
                            {(parrilla_4 != null) && <ItemTarifaAlarma item={parrilla_4} />}
                        </Row>
                    </Col>
                    <Col md={12} className='tarjeta-tarifa-alarma-header p-2'>
                        <Col md={12}>
                            <Row className='justify-content-around'>
                                <Col xs={5} md={5} className='tarjeta-tarifa-alarma-price p-2'>
                                    <span className='text-center'>{'Desde'}</span>
                                    <div className='d-flex align-items-center justify-content-center'><h4 className='m-1 font-semi'>{precio_1}</h4><small>{divisa_1}</small></div>
                                </Col>
                                <Col xs={5} md={5} className='tarjeta-tarifa-alarma-price p-2'>
                                    <span className='font-heavy'>{selector_2}</span>
                                    <div className='d-flex align-items-center justify-content-center'><h4 className='m-1 font-heavy'>{precio_2}</h4><small className='font-heavy'>{divisa_2}</small></div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    
                    <Col xs={12} md={12} className='mt-4'>
                        <Link className='btn btn-primary w-100' rel='nofollow noopener noreferrer' to={`${url_redirct}`} target="_blank">{`Más información`}</Link>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default TarjetaTarifaAlarma;
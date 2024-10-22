import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

function TarjetaPrestamo({ data }) {
    const { id, selector1, destacada, titulo, logo, valorMaximo, parrilla_1, parrilla_2, parrilla_3, parrilla_4,url_redirct } = data;
    return (
        <Col xs={12} className='mb-3'>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={0} className={`tarjeta tarjeta-tarifa my-2 ${destacada === 1 ? 'prioridad' : ''}`}>
                {/* <Card key={''} className={`m-1 mx-md-3 tarjeta-prestamo tarjeta text-center ${destacada === 1 && 'prioridad'}`}> */}
                <Card.Body>
                    <div className="prestamo-header">
                        <img className='img-logo-tarjeta' src={logo} />
                        {/* {titulo != null && <h4>{titulo}</h4>} */}
                        <hr />
                    </div>
                    <Row className={`d-flex justify-content-between align-content-center`}>
                        {selector1 && <ItemTarifaDescripcion destacada={destacada} title={selector1} />}
                        {valorMaximo > 0 && <ItemTarifaDescripcion destacada={destacada} title={`Monto máximo ${valorMaximo.toLocaleString()}`} />}
                        {!isMobile &&
                            <Col md={3} className='px-0'>
                                <a href={`/co/rediccion-banco/${id}`} target='blank' variant='dark' className='btn w-100 btn-dark p-3'/*  onClick={handleShow} id={data.id} */>
                                    Solicítalo ahora
                                </a>
                            </Col>}
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={12} md={3}>
                            {parrilla_1 != null && <div className="prestamo-informacion">
                                <div className='text-left m-2'>
                                    <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                    <span>{parrilla_1}</span></div>
                            </div>}
                        </Col>
                        <Col xs={12} md={3}>
                            {parrilla_2 != null && <div className="prestamo-informacion">
                                <div className='text-left m-2'>
                                    <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                    <span>{parrilla_2}</span></div>
                            </div>}
                        </Col>
                        <Col xs={12} md={3}>
                            {parrilla_3 != null && <div className="prestamo-informacion">
                                <div className='text-left m-2'>
                                    <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                    <span>{parrilla_3}</span></div>
                            </div>}
                        </Col>
                        <Col xs={12} md={3}>
                            {parrilla_4 != null && <div className="prestamo-informacion">
                                <div className='text-left m-2'>
                                    <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                    <span>{parrilla_4}</span></div>
                            </div>}
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        </Col >
    );
}

export default TarjetaPrestamo;
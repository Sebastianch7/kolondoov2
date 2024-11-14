import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { Link, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from 'react-icons/bs';

function TarjetaTarifaLeadPrestamo({ data }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    const { selector1, destacada, valorMaximo, parrilla_1, parrilla_2, parrilla_3, parrilla_4, url_redirct } = data;
    return (
        <Col xs={12}>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={0} className={`tarjeta tarjeta-tarifa my-0 ${destacada === 1 ? 'prioridad' : ''}`}>
                <Card.Body>
                    <Row className={`d-flex justify-content-start align-content-start`}>
                        {selector1 && <ItemTarifaDescripcion destacada={destacada} title={selector1} />}
                        {valorMaximo > 0 && <ItemTarifaDescripcion destacada={destacada} title={`Monto máximo ${valorMaximo.toLocaleString()}`} />}
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

export default TarjetaTarifaLeadPrestamo;